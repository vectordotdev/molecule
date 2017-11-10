import React from 'react'

export default ({ height = 64, width = 64, style = {} }) => (
  <svg viewBox="0 0 16 16" width={width} height={height} style={style}>
    <g fill="#444444">
      <path fill="#444444" d="M8,7v2.4h4.1c-0.2,1-1.2,3-4,3c-2.4,0-4.3-2-4.3-4.4s2-4.4,4.3-4.4 c1.4,0,2.3,0.6,2.8,1.1l1.9-1.8C11.6,1.7,10,1,8.1,1c-3.9,0-7,3.1-7,7s3.1,7,7,7c4,0,6.7-2.8,6.7-6.8c0-0.5,0-0.8-0.1-1.2H8L8,7z" />
    </g>
  </svg>
)
