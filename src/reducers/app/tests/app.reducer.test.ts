import appReducer from './../app.reducer'
import { appConstants } from './../../../constants/app.constants'
import { appReducerDefaultState } from './../app.reducer'

describe('Catalog Management Reducer', () => {
    test('when previous state is undefined, return false', () => {
        const newState = appReducer(undefined, {})
        expect(newState).toStrictEqual(appReducerDefaultState)
    })

    test('return previous state when unknown action type', () => {
        const newState = appReducer(
            appReducerDefaultState,
            { type: 'unknown' }
        )
        expect(newState).toStrictEqual(appReducerDefaultState)
    })

    test('Toggle the state for action type TOGGLE_IS_PLAY_CLICKED', () => {
        const newState = appReducer(
            appReducerDefaultState,
            {
                type: appConstants.TOGGLE_IS_PLAY_CLICKED,
                payload: true
            }
        )
        expect(newState.isPlayClicked).toBe(true)
    })
})
