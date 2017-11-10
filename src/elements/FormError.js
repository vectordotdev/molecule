import styled from 'styled-components'

export default styled.p`
  text-align: left;
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.danger4};
  background: ${props => props.theme.colors.danger1};
  color: ${props => props.theme.colors.danger8};
`
