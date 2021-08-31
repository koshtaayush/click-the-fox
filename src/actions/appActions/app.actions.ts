//Library
import { Dispatch } from 'redux'
import { RootStateOrAny } from 'react-redux'

//Imports
import { appActions } from './app.actionCreator'

//Utils
import { makeGet } from './../../services/api.service'
import { shuffleArray } from '../../utils/shuffleArray'

//Shared Interfaces
import { gridImage, playerPerformance } from '../../typings/sharedInterfaces'

//Configs
import { DOG_API_END_POINT, CAT_API_END_POINT, FOX_API_END_POINT } from './../../config/api.config'
import { animalsOrderedList } from './../../config/constants.config'

export const setPlayerPlaying = (payload: string) => {
    return (dispatch: Dispatch) => {
        dispatch(appActions.setPlayerPlaying(payload))
    }
}

export const toggleIsPlayClicked = () => {
    return (dispatch: Dispatch, getState: RootStateOrAny) => {
        let { isPlayClicked } = getState().app
        dispatch(appActions.toggleIsPlayClicked(!isPlayClicked))
    }
}

export const setScore = (payload: number) => {
    return (dispatch: Dispatch) => {
        dispatch(appActions.setScore(payload))
    }
}

export const fetchImages = () => {
    return (dispatch: Dispatch) => {
        dispatch(appActions.setFetchImageLoading(true))

        //The order of images which we would get from promise.all would be same as this
        let animals = animalsOrderedList.slice();

        Promise.all(getPromises(animals))
            .then(
                async (result) => {
                    let imagesWithUrl = result.map((x, index) => {
                        if (animals[index] === 'dog') {
                            new Image().src = x['message']
                            return {
                                image: x['message'],
                                isFox: false,
                            }
                        }

                        else if (animals[index] === 'cat') {
                            new Image().src = x[0]['url']
                            return {
                                image: x[0]['url'],
                                isFox: false,
                            }
                        }

                        // else if (animals[index] === 'fox') {
                        else {
                            new Image().src = x['image']
                            return {
                                image: x['image'],
                                isFox: true,
                            }
                        }

                    })

                    let shuffledImages = shuffleArray(imagesWithUrl)
                    dispatch(appActions.setImages(shuffledImages))
                    dispatch(appActions.setImageFetchError(false))
                    dispatch(appActions.setFetchImageLoading(false))
                },
                (error) => {
                    dispatch(appActions.setFetchImageLoading(false))
                    dispatch(appActions.setImageFetchError(true))
                }
            )
            .catch(() => {
                dispatch(appActions.setFetchImageLoading(false))
                dispatch(appActions.setImageFetchError(true))
            })
    }
}

const getPromises = (arr: Array<string>) => {
    let promisesArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'dog') {
            promisesArr.push(makeGet(DOG_API_END_POINT))
        } else if (arr[i] === 'cat') {
            promisesArr.push(makeGet(CAT_API_END_POINT))
        } else if (arr[i] === 'fox') {
            promisesArr.push(makeGet(FOX_API_END_POINT))
        }
    }

    return promisesArr
}

export const setImages = (payload: Array<gridImage>) => {
    return (dispatch: Dispatch) => {
        dispatch(appActions.setImages(payload))
    }
}

export const addPlayerPerformance = (payload: playerPerformance) => {
    return (dispatch: Dispatch, getState: () => RootStateOrAny) => {

        let { overallStanding } = getState().app
        let localPlayerStats = [
            ...overallStanding,
            ...[payload],
        ]
        localPlayerStats.sort((a, b) => {
            return b.score - a.score
        })

        dispatch(appActions.addPlayerPerformance(localPlayerStats))
    }
}
