import React from 'react'
import { shallow } from 'enzyme'
import * as Redux from 'react-redux'

import Welcome from './../index'

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: jest.fn(),
    }),
}))

describe('Welcome', () => {

    const defaultState = {
        app: {
            overallStanding: []
        },
    }

    const setUpUseSelector = (state = {}) => {
        const localState = {
            app: { ...defaultState.app, ...state },
        }
        const setupState = { ...localState }
        const useSelectorMock = jest.spyOn(Redux, 'useSelector')
        return useSelectorMock.mockImplementation((callback) =>
            callback(setupState)
        )
    }

    const setUpUseDispatch = (state = {}) => {
        const useDispatchMock = jest.spyOn(Redux, 'useDispatch')
        const mockDispatch = jest.fn()
        return useDispatchMock.mockReturnValue(mockDispatch)
    }

    beforeEach(() => {
        setUpUseDispatch()
    })

    it('Should match the snapshot', () => {

        setUpUseSelector()

        const component = shallow(
            <Welcome />
        )

        expect(component).toMatchSnapshot()
    })
    
    it('Should render the Name text and input box', () => {

        setUpUseSelector({})

        const component = shallow(
            <Welcome />
        )

        expect(component.find({'test-id': 'welcomeNameInput'})).toHaveLength(1)
    })
    
    it('Should render the greeting text once play is clicked', () => {

        setUpUseSelector({ isPlayClicked: true })

        const component = shallow(
            <Welcome />
        )

        expect(component.find({'test-id': 'welcomeLabel'})).toHaveLength(1)
        expect(component.find({'test-id': 'welcomeNameInput'})).toHaveLength(0)

    })
    
    it('Should always show play button', () => {

        setUpUseSelector({})

        const component = shallow(
            <Welcome />
        )

        expect(component.find({'test-id': 'welcomePlayButton'})).toHaveLength(1)

    })
})
