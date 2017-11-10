import React from 'react'
import styled from 'styled-components'
import { GitHub } from 'svg'
import { Button } from 'react-interface'

const ButtonWrapper = styled(Button)`
  background: #333333;
  color: #FFF;

  &:hover {
    background: #242424;
  }

  svg path { fill: #FFF }
`

export default props => (
  <ButtonWrapper {...props}>
    <GitHub height={20} width={20} style={{ marginRight: '.5rem' }} />
    <span>{props.children}</span>
  </ButtonWrapper>
)
