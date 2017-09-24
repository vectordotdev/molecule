/**
*
* Navigation
*
*/

import React from 'react'
import Wrapper from './Wrapper'

function Navigation ({ user }) {
  return (
    <Wrapper>
      <a>Molecule</a>
      <a>{user && user.email}</a>
    </Wrapper>
  )
}

export default Navigation
