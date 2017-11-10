/**
*
* Navigation
*
*/

import React from 'react'
import { Flex } from 'grid-styled'
import { Icon } from 'react-interface'
import { Container } from 'elements'
import Wrapper from './Wrapper'
import UserNav from './UserNav'
import NavItem from './NavItem'

function Navigation ({ user, logout }) {
  return (
    <Wrapper>
      <Container>
        <Flex justify="center" align="center">
          <NavItem to="/dashboard" exact icon={<Icon type="activity" />} title="Dashboard" />
          <NavItem to="/stuff" exact icon={<Icon type="activity" />} title="Stuff" />
        </Flex>
      </Container>
      <UserNav user={user} handleLogout={logout} />
    </Wrapper>
  )
}

export default Navigation
