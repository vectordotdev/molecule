import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import onClickOutside from 'react-onclickoutside'
import { fadeIn } from 'utils/animations'

const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  position: relative;
  outline: none !important;
  cursor: pointer;

  &::selection { background: none }
`

const ContentWrapper = styled.div`
  display: ${props => props.open ? 'block' : 'none'};
  position: absolute;
  top: 120%;
  left: ${props => props.position === 'left' ? '0' : 'initial'};
  right: ${props => props.position === 'right' ? '0' : 'initial'};
  min-width: ${props => props.minWidth || '100%'};
  max-width: ${props => props.maxWidth || 'initial'};
  z-index: 99;
  animation: ${fadeIn} .2s linear 1;
  border: 1px solid ${props => props.theme.popoverBorder};
  box-shadow: ${props => props.shadow ? props.theme.popoverShadow : 'none'};
  max-height: 415px;
  overflow-y: auto;
  transition: .3s cubic-bezier(.3, 0, 0, 1.3);
  border-radius: 4px;
`

class Popover extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      open: props.isOpen
    }
  }

  handleContentClick = e => {
    const { open } = this.state
    const { dismissOnClick } = this.props

    if (!dismissOnClick && open) {
      e.stopPropagation()
      return false
    }

    this.setState({
      open: !this.state.open
    })
  }

  handleSelectorClick = e => {
    e.preventDefault()
    e.stopPropagation()
    this.setState({
      open: !this.state.open
    })
  }

  handleClickOutside = () => {
    this.setState({ open: false })
  }

  handleKeyDown = e => {
    // If 'escape' is pressed
    if (e.keyCode === 27) {
      e.preventDefault()
      return this.setState({ open: false })
    }
  }

  close = () => {
    this.setState({ open: false })
  }

  render () {
    const {
      content,
      children,
      width = 'auto',
      height = '100%',
      position = 'left',
      shadow = true,
      minWidth,
      maxWidth,
      className,
      ...rest
    } = this.props

    return (
      <Wrapper
        height={height}
        width={width}
        onClick={this.handleSelectorClick}
        onKeyDown={this.handleKeyDown}
        tabIndex="0"
        className={className}
        {...rest}
      >
        {children}
        <ContentWrapper
          {...this.state}
          position={position}
          onClick={this.handleContentClick}
          minWidth={minWidth}
          maxWidth={maxWidth}
          closePopover={this.close}
          shadow={shadow}
        >
          {React.cloneElement(content, {
            closePopover: this.close
          })}
        </ContentWrapper>
      </Wrapper>
    )
  }
}

Popover.defaultProps = {
  dismissOnClick: true,
  isOpen: false
}

Popover.propTypes = {
  height: PropTypes.any,
  width: PropTypes.any,
  position: PropTypes.string,
  content: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  shadow: PropTypes.bool,
  minWidth: PropTypes.string,
  maxWidth: PropTypes.string,
  dismissOnClick: PropTypes.bool,
  isOpen: PropTypes.bool
}

export default onClickOutside(Popover)
