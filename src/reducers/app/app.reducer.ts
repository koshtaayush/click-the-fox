// App  Reducer
import { gridImage, playerPerformance } from './../../typings/sharedInterfaces'
import { appConstants } from './../../constants/app.constants'

export const appReducerDefaultState: IAppReducer = {
    playerPlaying: '',
    isPlayClicked: false,
    fetchImageLoading: false,
    images: [],
    imageFetchError: false,
    currentScore: 0,
    overallStanding: [],
}

const AppReducer = (state = appReducerDefaultState, action: any): IAppReducer => {
    switch (action.type) {
        case appConstants.SET_PLAYER_PLAYING:
            return {
                ...state,
                playerPlaying: action.payload,
            }

        case appConstants.TOGGLE_IS_PLAY_CLICKED:
            return {
                ...state,
                isPlayClicked: action.payload,
            }

        case appConstants.SET_FETCH_IMAGE_LOADING:
            return {
                ...state,
                fetchImageLoading: action.payload,
            }

        case appConstants.SET_IMAGES:
            return {
                ...state,
                images: action.payload,
            }

        case appConstants.SET_IMAGE_FETCH_ERROR:
            return {
                ...state,
                imageFetchError: action.payload,
            }

        case appConstants.SET_SCORE:
            return {
                ...state,
                currentScore: action.payload,
            }

        case appConstants.ADD_PLAYER_PERFORMANCE: {
            return {
                ...state,
                overallStanding: action.payload,
            }
        }

        default:
            return state
    }
}

export default AppReducer 

interface IAppReducer {
    playerPlaying: string
    isPlayClicked: boolean
    fetchImageLoading: boolean
    images: Array<gridImage>
    imageFetchError: boolean
    currentScore: number
    overallStanding: Array<playerPerformance>
}
