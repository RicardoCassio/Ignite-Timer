import styled, { css } from 'styled-components'

export type ButtonVarient = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
  variant: ButtonVarient;
}

const buttonVariants = {
  primary: 'purple',
  secondary:'orange',
  danger: 'red',
  success:'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  ${props => {
    return css`background-color: ${buttonVariants[props.variant]}`
  }}
`