//Library
import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

//Utils
import { useInterval } from './../../utils/useInterval'

//Actions
import { addPlayerPerformance } from './../../actions/appActions/app.actions'

//Shared interfaces
import {
    playerPerformance
} from './../../typings/sharedInterfaces'

//Configs
import { TIMER_VALUE } from './../../config/constants.config'

interface Props {}

const Timer: React.FC<Props> = () => {
    const { currentScore, playerPlaying } = useSelector(
        (state: {
            app: {
                currentScore: number
                playerPlaying: string
            }
        }) => ({
            currentScore: state.app.currentScore,
            playerPlaying: state.app.playerPlaying,
        })
    )

    //Local state to maintain timer
    const [seconds, setSeconds] = React.useState<number>(TIMER_VALUE)

    const dispatch = useDispatch()
    const history = useHistory()

    /**
     * Hook for setInterval to avoid closure stale memory issue
     */
    useInterval(() => {
        if (seconds > 0) {
            setSeconds(seconds - 1)
        } else {
            handleMoveToScore()
            history.push('/score')
        }
    }, 1000)

    /**
     * Function to move user to score screen once timer has ended
     */
    const handleMoveToScore = () => {
        let data: playerPerformance = {
            name: playerPlaying,
            datePlayed: new Date(),
            score: currentScore,
        }
        dispatch(addPlayerPerformance(data))
    }

    return (
        <React.Fragment>
            <TimeContainer>Time Left: {seconds}</TimeContainer>
        </React.Fragment>
    )
}

export default Timer

const TimeContainer = styled.div``
