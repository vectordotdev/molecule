import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Item = styled.li`
  position: relative;

  a {
    font-family: "Avenir";
    font-size: 14px;
    color: rgba(255, 255, 255, 0.65);
    letter-spacing: 0.5px;
    line-height: 16px;
    font-weight: 300;
    display: flex;
    align-items: center;
    border-bottom: 2px solid ${props => props.theme.navigationBackground};
    padding: 1.25rem 1rem 1rem 1rem;
  }

  a:hover {
    border-bottom: 2px solid rgba(193, 192, 216, 0.65);
    color: ${props => props.theme.navigationItemActiveColor};
    opacity: 1;
  }

  a.active {
    color: ${props => props.theme.navigationItemActiveColor};
    border-bottom: 2px solid rgba(193, 192, 216, 0.65);
    opacity: 1;
  }

  svg {
    height: 18px;
    width: 18px;
    margin-right: .5rem;
  }

  g { stroke: ${props => props.theme.navigationItemIcon} }
  a.active svg g, a:hover svg g {
    stroke: ${props => props.theme.navigationItemActiveIcon};
  }

  span {
    display: block;
  }
`

const Indicator = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #5493F8;
  position: absolute;
  top: 8px;
  right: 6px;
`

const Tag = styled.div`
  border-radius: 2px;
  padding: 1px 2px;
  background: #5493F8;
  top: 8px;
  margin-left: 4px;
  font-size: 10px;
`

const NavItem = ({
  title,
  icon,
  link,
  hasNotifications = false,
  isVisible = true,
  tag,
  ...props
}) => {
  if (!isVisible) return null
  return (
    <Item>
      <NavLink activeClassName="active" to={link} {...props}>
        {icon}
        <span>{title}</span>
        {hasNotifications && <Indicator />}
        {tag && <Tag>{tag}</Tag>}
      </NavLink>
    </Item>
  )
}

export default NavItem
