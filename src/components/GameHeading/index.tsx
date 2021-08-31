//Library
import React from 'react'
import styled from 'styled-components'

interface Props {}

const GameHeading: React.FC<Props> = () => {
    return (
        <React.Fragment>
            <Heading>Click the Fox! Game</Heading>
        </React.Fragment>
    )
}

export default GameHeading

const Heading = styled.div`
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 2rem;
`
