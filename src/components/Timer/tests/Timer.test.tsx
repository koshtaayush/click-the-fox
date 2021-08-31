import React from 'react'
import { shallow } from 'enzyme'
import * as Redux from 'react-redux'

import Timer from './../index'


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: jest.fn(),
    }),
}))

describe('Timer', () => {

    const defaultState = {
        app: {
            currentScore: 10,
            playerPlaying: 'Ayush'
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
            <Timer />
        )

        expect(component).toMatchSnapshot()
    })
})
