//Library
import React from 'react'
import styled from 'styled-components'

interface Props {
    onClickProp: () => void
    buttonType: 'S' | 'L'
    disabled: boolean
    buttonText: string
}

const Button: React.FC<Props> = (props) => {
    const { onClickProp, buttonType, disabled, buttonText } = props
    return (
        <React.Fragment>
            <ButtonContainer
                type="button"
                name="sendMessage"
                onClick={onClickProp}
                disabled={disabled}
                buttonType={buttonType}
                test-id={'buttonTest'}>
                {buttonText}
            </ButtonContainer>
        </React.Fragment>
    )
}

export default Button

interface IButtonContainer {
    buttonType: string
    disabled: boolean
}

const ButtonContainer = styled.button<IButtonContainer>`
    background-color: ${(props) => (props.disabled ? '#fff' : '#FFC000')};
    color: ${(props) => (props.disabled ? '#000000' : '#FFFFFF')};
    height: 3.5rem;
    border: 0.125rem solid #c09003;
    border-radius: 0.25rem;
    padding: ${(props) => (props.buttonType === 'S' ? '0.5rem 1rem' : '1rem 4rem')};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 1rem;
    margin-right: 1rem;
`
