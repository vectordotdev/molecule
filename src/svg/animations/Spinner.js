import React from 'react'
import PropTypes from 'prop-types'

function speedSwitch (speed) {
  if (speed === 'fast') return 600
  if (speed === 'slow') return 900
  return 750
}

const Spinner = ({
  color,
  speed,
  gap,
  thickness,
  size,
  margin,
  ...props
}) =>
  (<svg
    height={size}
    width={size}
    {...props}
    style={{ animationDuration: `${speedSwitch(speed)}ms`, margin }}
    className="__react-svg-spinner_circle"
    role="img"
    aria-labelledby="title desc"
    viewBox="0 0 32 32"
  >
    <style dangerouslySetInnerHTML={{ __html: `
      .__react-svg-spinner_circle{
          transition-property: transform;
          animation-name: __react-svg-spinner_infinite-spin;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
      }
      @keyframes __react-svg-spinner_infinite-spin {
          from {transform: rotate(0deg)}
          to {transform: rotate(360deg)}
      }
    ` }}
    />
    <circle
      role="presentation"
      cx={16}
      cy={16}
      r={14 - (thickness / 2)}
      stroke={color}
      fill="none"
      strokeWidth={thickness}
      strokeDasharray={Math.PI * 2 * (11 - gap)}
      strokeLinecap="round"
    />
  </svg>)

Spinner.propTypes = {
  color: PropTypes.string,
  thickness: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]).isRequired,
  gap: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
  speed: PropTypes.oneOf(['fast', 'slow']),
  size: PropTypes.string.isRequired,
}

Spinner.defaultProps = {
  color: 'rgba(0,0,0,0.4)',
  gap: 4,
  thickness: 4,
  size: '1em',
  speed: 'fast',
}

export default Spinner
