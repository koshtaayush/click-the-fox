import React from 'react'
import { shallow } from 'enzyme'
import * as Redux from 'react-redux'

import Score from './../index'

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: jest.fn(),
    }),
}))

describe('Score', () => {

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
            <Score />
        )

        expect(component).toMatchSnapshot()
    })
    
    it('Should render the correct number of table rows', () => {

        setUpUseSelector({
            overallStanding: [
                {
                  name: 'Player 1',
                  datePlayed: new Date(),
                  score: 2
                },
                {
                  name: 'Player 1',
                  datePlayed: new Date(),
                  score: 1
                }
              ]
        })

        const component = shallow(
            <Score />
        )

        expect(component.find({'test-id': 'scoreTableRow'})).toHaveLength(2)
    })
})
