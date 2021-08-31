//Library
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

//Reusable Components
import Input from './../../components/Input'
import Button from './../../components/Button'
import GameHeading from './../../components/GameHeading'

//Actions
import {
    fetchImages,
    setPlayerPlaying,
    toggleIsPlayClicked,
} from './../../actions/appActions/app.actions'

interface Props {}

const Welcome: React.FC<Props> = () => {
    const { playerPlaying, isPlayClicked } = useSelector(
        (state: {
            app: {
                playerPlaying: string
                isPlayClicked: boolean
            }
        }) => ({
            playerPlaying: state.app.playerPlaying,
            isPlayClicked: state.app.isPlayClicked,
        })
    )

    const dispatch = useDispatch()
    const history = useHistory()

    /**
     * Function to handle the change event for player name input box
     */
    const handleOnChange = (value: string) => {
        dispatch(setPlayerPlaying(value))
    }

    /**
     * Function to handle the click event for play button click
     * Handles both first and second button click
     */
    const handleButtonClick = () => {
        if (isPlayClicked) {
            history.push('/play')
        } else {
            dispatch(toggleIsPlayClicked())
        }
    }

    /**
     * Function which gets called if the user clicks on name to change it
     */
    const handleNameClicked = () => {
        dispatch(toggleIsPlayClicked())
    }

    /**
     * Hook to call the function first time when screen loads
     */
    useEffect(() => {
        handleFetchImages()
    }, [])

    /**
     * Function to fetch the images which will be shown in play screen
     * done as a part of preloading and keeping in store
     */
    const handleFetchImages = () => {
        dispatch(fetchImages())
    }

    return (
        <React.Fragment>
            <Container>
                <Info>
                    <GameHeading />
                    {!isPlayClicked && (
                        <NameInput test-id="welcomeNameInput">
                            <Label>Name:</Label>
                            <InputSection>
                                <Input
                                    onChangeProp={handleOnChange}
                                    inputValue={playerPlaying}
                                    placeHolderText={'Enter Name'}
                                />
                            </InputSection>
                        </NameInput>
                    )}

                    {isPlayClicked && (
                        <Label test-id="welcomeLabel">
                            Hello{' '}
                            <PlayerName onClick={handleNameClicked}>
                                {playerPlaying}
                            </PlayerName>
                        </Label>
                    )}
                </Info>

                <Play>
                    <Button
                        test-id="welcomePlayButton"
                        onClickProp={handleButtonClick}
                        buttonType={'L'}
                        disabled={playerPlaying === ''}
                        buttonText={'Play !'}
                    />
                </Play>
            </Container>
        </React.Fragment>
    )
}

export default Welcome

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    height: calc(100% - 4rem);
    width: calc(100% - 4rem);
`

const NameInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Label = styled.div`
    margin-right: 1rem;
    font-weight: 500;
    font-size: 1.5rem;
`

const PlayerName = styled.span`
    cursor: pointer;
`
const InputSection = styled.div``

const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Play = styled.div``
