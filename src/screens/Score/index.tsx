//Library
import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

//Shared interface
import { playerPerformance } from './../../typings/sharedInterfaces'

//Utils
import { formatDate } from './../../utils/formatDate'

//Reusable Components
import GameHeading from './../../components/GameHeading'
import Button from '../../components/Button'

//Actions
import {
    fetchImages,
    setPlayerPlaying,
    toggleIsPlayClicked,
} from './../../actions/appActions/app.actions'

interface Props {}

const Score: React.FC<Props> = () => {
    const { overallStanding } = useSelector(
        (state: {
            app: {
                overallStanding: Array<playerPerformance>
            }
        }) => ({
            overallStanding: state.app.overallStanding,
        })
    )

    const dispatch = useDispatch()
    const history = useHistory()

    /**
     * Function to move user to welcome screen
     */
    const handleMoveToWelcomeScreen = () => {
        dispatch(toggleIsPlayClicked())
        dispatch(setPlayerPlaying(''))
        history.push('/')
    }

    /**
     * Function to show new set of images to user and play again
     */
    const handlePlayAgain = () => {
        dispatch(fetchImages())
        history.push('/play')
    }

    return (
        <React.Fragment>
            <Container>
                <GameHeading />
                <Label>Scoreboard</Label>
                <ScoreTable>
                    <thead>
                        <TableRow>
                            <TableLegend>Rank</TableLegend>
                            <TableLegend>Name</TableLegend>
                            <TableLegend>Date</TableLegend>
                            <TableLegend>Score</TableLegend>
                        </TableRow>
                    </thead>
                    <tbody>
                        {overallStanding.map(
                            (playerScore: playerPerformance, index: number) => {
                                return (
                                    <TableRow key={index} test-id="scoreTableRow">
                                        <RowRank>{index + 1}</RowRank>
                                        <RowInfo
                                            index={index}
                                            textAlignment={'start'}>
                                            {playerScore.name}
                                        </RowInfo>
                                        <RowInfo
                                            index={index}
                                            textAlignment={'center'}>
                                            {formatDate(playerScore.datePlayed)}
                                        </RowInfo>
                                        <RowInfo
                                            index={index}
                                            textAlignment={'end'}>
                                            {playerScore.score}
                                        </RowInfo>
                                    </TableRow>
                                )
                            }
                        )}
                    </tbody>
                </ScoreTable>
                <BottomActions>
                    <MoveToWelcomeScreen>
                        <Button
                            onClickProp={handleMoveToWelcomeScreen}
                            buttonText={'Move to Welcome screen'}
                            disabled={false}
                            buttonType={'S'}
                        />
                    </MoveToWelcomeScreen>

                    <PlayAgain>
                        <Button
                            onClickProp={handlePlayAgain}
                            buttonText={'PLAY!'}
                            disabled={false}
                            buttonType={'L'}
                        />
                    </PlayAgain>
                </BottomActions>
            </Container>
        </React.Fragment>
    )
}

export default Score

interface IRowInfo {
    index: number
    textAlignment: string
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    height: calc(100% - 4rem);
    width: calc(100% - 4rem);
`

const BottomActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-evenly;
    width: 50%;
`
const MoveToWelcomeScreen = styled.div``
const PlayAgain = styled.div``
const Label = styled.div`
    font-weight: 500;
    font-size: 1.5rem;
    text-transform: uppercase;
`

const ScoreTable = styled.table`
    font-weight: 500;
    min-width: 40%;
`

const TableLegend = styled.th`
    background-color: #a5a5a5;
    color: #ffffff;
    padding: 1rem;
`

const RowRank = styled.td`
    background-color: #a5a5a5;
    color: #ffffff;
    padding: 1rem;
    text-align: center;
`

const RowInfo = styled.td<IRowInfo>`
    background-color: ${(props) =>
        props.index % 2 === 0 ? '#E1E1E1' : '#F0F0F0'};
    color: #ffffff;
    padding: 1rem;
    color: #000;
    font-weight: 500;
    text-align: ${(props) => props.textAlignment};
`

const TableRow = styled.tr``
