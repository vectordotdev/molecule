import React from 'react'
import styled, { css } from 'styled-components'
import { Icon } from 'react-interface'

const Wrapper = styled.div`
  padding: 1rem;
  text-align: center;
  color: #FFF;
  position: relative;
  top: -1px;
  cursor: pointer;

  ${props => props.type === 'success' && css`
    background: ${props => props.theme.success};
  `}

  ${props => props.type === 'warning' && css`
    background: ${props => props.theme.warning};
  `}

  ${props => props.type === 'info' && css`
    background: ${props => props.theme.info};
  `}

  ${props => props.type === 'error' && css`
    background: ${props => props.theme.error};
  `}

  svg {
    height: 20px;
    width: 20px;
    position: absolute;
    right: 10px;
    transform: translateY(-50%);
    top: 50%;
  }
`

const Notification = ({ notification, setNotification }) => (
  <Wrapper
    type={notification.type}
    onClick={notification.dismissable ? () => setNotification(null) : null}
  >
    <span>{notification.message}</span>
    {notification.dismissable && <Icon type="close" />}
  </Wrapper>
)

export default Notification
