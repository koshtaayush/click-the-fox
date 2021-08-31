import React from 'react'
import { shallow } from 'enzyme'
import * as Redux from 'react-redux'

import Play from './../index'


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: jest.fn(),
    }),
}))

describe('Play', () => {

    const defaultState = {
        app: {
            images: [],
            currentScore: 0,
            fetchImageLoading: false,
            imageFetchError: false,
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

        setUpUseSelector({})

        const component = shallow(
            <Play />
        )

        expect(component).toMatchSnapshot()
    })
    
    it('Should show error text in case of API failure', () => {

        setUpUseSelector({ imageFetchError: true })

        const component = shallow(
            <Play />
        )

        expect(component.find({'test-id': 'playErrorContainer'}).length).toBe(1)
        expect(component.find({'test-id': 'playErrorContainer'}).text()).toBe('Failed to load images. Sorry for the inconvenience caused')
    })
    
    it('Should show loader when images have not loaded', () => {

        setUpUseSelector()

        const numberOfImagesLoaded = 2

        React.useState = jest
            .fn()
            .mockReturnValueOnce([numberOfImagesLoaded, {}])

        const component = shallow(
            <Play />
        )

        expect(component.find({'test-id': 'playLoadingContainer'}).length).toBe(1)
    })
})
