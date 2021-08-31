//Library
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

//Reusable Components
import GameHeading from './../../components/GameHeading'
import Timer from './../../components/Timer'

//Actions
import { setImages, setScore } from './../../actions/appActions/app.actions'

//Shared Interface
import { gridImage } from './../../typings/sharedInterfaces'

//Utils
import { shuffleArray } from './../../utils/shuffleArray'

//Configs
import { animalsOrderedList } from './../../config/constants.config'

interface Props {}

const Play: React.FC<Props> = () => {
    const {
        images,
        currentScore,
        fetchImageLoading,
        imageFetchError,
    } = useSelector(
        (state: {
            app: {
                images: Array<gridImage>
                currentScore: number
                fetchImageLoading: boolean
                imageFetchError: boolean
            }
        }) => ({
            images: state.app.images,
            currentScore: state.app.currentScore,
            fetchImageLoading: state.app.fetchImageLoading,
            imageFetchError: state.app.imageFetchError,
        })
    )

    const dispatch = useDispatch()

    //Local state to keep track of number of images loaded
    const [numberOfImagesLoaded, setNumberOfImagesLoaded] = React.useState<
        number
    >(0)

    /**
     * Hook to set score to 0 first time the screen loads
     */
    useEffect(() => {
        dispatch(setScore(0))
    }, [])

    /**
     * Function triggered when an image from the set is clicked
     * Responsible for incrementing/decrementing the score and showing the next set
     */
    const handleImageClick = (imageObject: gridImage) => {
        if (imageObject.isFox) {
            dispatch(setScore(currentScore + 1))
        } else {
            dispatch(setScore(currentScore - 1))
        }
        showNextSet()
    }

    /**
     * Function to randomize the image order of images and show the next set
     */
    const showNextSet = () => {
        let shuffledImages = shuffleArray(images)
        dispatch(setImages(shuffledImages))
    }

    /**
     * Function to keep a track of how many images have finished loading
     * So that can be shown on screen at same time
     */
    const handleOnLoad = () => {
        setNumberOfImagesLoaded(numberOfImagesLoaded + 1)
    }

    return (
        <React.Fragment>
            <Container>
                <GameHeading />
                
                {numberOfImagesLoaded >= animalsOrderedList.length && (
                    <ScoreAndTime>
                        Score: {currentScore}
                        <Timer />
                    </ScoreAndTime>
                )}

                {fetchImageLoading ||
                    (numberOfImagesLoaded < animalsOrderedList.length &&
                        !imageFetchError && (
                            <LoadingContainer test-id="playLoadingContainer">
                                Please wait while images are loading
                            </LoadingContainer>
                        ))}

                {imageFetchError && (
                    <ErrorContainer test-id="playErrorContainer">
                        Failed to load images. Sorry for the inconvenience
                        caused
                    </ErrorContainer>
                )}

                {!fetchImageLoading && (
                    <PictureGrid>
                        {images.map((animalImage: gridImage, index: number) => {
                            return (
                                <Pic
                                    src={animalImage.image}
                                    onClick={() =>
                                        handleImageClick(animalImage)
                                    }
                                    key={index}
                                    onLoad={() => handleOnLoad()}
                                    hasLoaded={
                                        numberOfImagesLoaded >=
                                        animalsOrderedList.length
                                    }
                                />
                            )
                        })}
                    </PictureGrid>
                )}
            </Container>
        </React.Fragment>
    )
}

export default Play

interface IPic {
    hasLoaded: boolean
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    height: calc(100% - 4rem);
    width: calc(100% - 4rem);
`

const ScoreAndTime = styled.div`
    display: flex;
    margin-bottom: 1rem;
    height: 46.875rem;
    width: 46.875rem;
    align-items: center;
    justify-content: space-around;
    font-size: 1.5rem;
    font-weight: 500;
`

const LoadingContainer = styled.div`
    margin-top: 2rem;
    color: #ffc000;
`

const ErrorContainer = styled.div`
    margin-top: 2rem;
    color: #fe4b4a;
`

const PictureGrid = styled.div`
    height: 46.875rem;
    width: 46.875rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
`

const Pic = styled.img<IPic>`
    width: 100%;
    height: 100%;
    cursor: pointer;
    visibility: ${(props) => (props.hasLoaded ? 'visible' : 'hidden')};
`
