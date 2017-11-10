import React from 'react'
import { renderComponent, branch } from 'recompose'
import { Panel, Center } from 'elements'
import Spinner from 'svg/animations/Spinner'

const Loader = () => (
  <Center>
    <Panel>
      <Center style={{ margin: '50px 0', position: 'relative' }}>
        <Spinner
          color="#092662"
          height={25}
          width={25}
        />
      </Center>
    </Panel>
  </Center>
)

export default isLoading => (
  branch(
    isLoading,
    renderComponent(Loader),
  )
)
