import { appConstants } from './../../constants/app.constants'

type ActionCreatorReturnType<T> = {
    type: string
    payload?: T
}

const setPlayerPlaying = <T>(payload: T): ActionCreatorReturnType<T> => {
    return {
        type: appConstants.SET_PLAYER_PLAYING,
        payload,
    }
}

const toggleIsPlayClicked = <T>(payload: T): ActionCreatorReturnType<T> => {
    return {
        type: appConstants.TOGGLE_IS_PLAY_CLICKED,
        payload
    }
}

const setFetchImageLoading = <T>(payload: T): ActionCreatorReturnType<T> => {
    return {
        type: appConstants.SET_FETCH_IMAGE_LOADING,
        payload,
    }
}

const setImages = <T>(payload: T): ActionCreatorReturnType<T> => {
    return {
        type: appConstants.SET_IMAGES,
        payload,
    }
}

const setImageFetchError = <T>(payload: T): ActionCreatorReturnType<T> => {
    return {
        type: appConstants.SET_IMAGE_FETCH_ERROR,
        payload,
    }
}

const addPlayerPerformance = <T>(payload: T): ActionCreatorReturnType<T> => {
    return {
        type: appConstants.ADD_PLAYER_PERFORMANCE,
        payload,
    }
}

const setScore = <T>(payload: T): ActionCreatorReturnType<T> => {
    return {
        type: appConstants.SET_SCORE,
        payload,
    }
}

export const appActions = {
    setPlayerPlaying,
    toggleIsPlayClicked,
    setFetchImageLoading,
    setImages,
    setImageFetchError,
    addPlayerPerformance,
    setScore,
}
