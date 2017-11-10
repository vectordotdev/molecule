import React from 'react'
import styled from 'styled-components'
import { Google } from 'svg'
import { Button } from 'react-interface'

const ButtonWrapper = styled(Button)`
  background: #4688F1;
  color: #FFF;

  &:hover {
    background: #315FA8;
  }

  svg path { fill: #FFF }
`

export default props => (
  <ButtonWrapper {...props}>
    <Google height={20} width={20} style={{ marginRight: '.5rem' }} />
    <span>{props.children}</span>
  </ButtonWrapper>
)
