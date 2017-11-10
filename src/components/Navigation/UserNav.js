import React from 'react'
import PropTypes from 'prop-types'
import Popover from 'components/Popover'
import { Link } from 'react-router-dom'
import { Menu, MenuItem, MenuDivider, MenuHeader } from 'react-interface'
import { Logout, Caret } from 'svg'

const UserNav = ({
  user,
  handleLogout
}) => (
  <Popover
    content={
      <Menu>
        <MenuHeader>
          Account
        </MenuHeader>
        <Link to="/account">
          <MenuItem>
            Profile
          </MenuItem>
        </Link>
        <MenuDivider />
        <MenuItem onClick={handleLogout}>
          <Logout />
          <span>Logout</span>
        </MenuItem>
      </Menu>
    }
  >
    <div>
      <span>{user.email}</span>
      <Caret height={14} width={14} style={{ marginLeft: '5px' }} />
    </div>
  </Popover>
)

UserNav.propTypes = {
  user: PropTypes.object,
  handleLogout: PropTypes.func
}

export default UserNav
