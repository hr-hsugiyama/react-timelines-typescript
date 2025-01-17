import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Marker from '.'

class NowMarker extends PureComponent {
  render() {
    const { now, time, markerText, visible } = this.props
    return (
      <Marker modifier="now" x={time.toX(now)} visible={visible}>
        <p>{markerText}</p>
      </Marker>
    )
  }
}

NowMarker.propTypes = {
  time: PropTypes.shape({
    toX: PropTypes.func.isRequired,
  }).isRequired,
  visible: PropTypes.bool.isRequired,
  now: PropTypes.instanceOf(Date).isRequired,
  markerText: PropTypes.string,
}

export default NowMarker
