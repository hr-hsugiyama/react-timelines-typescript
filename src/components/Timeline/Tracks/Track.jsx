import React from 'react'
import PropTypes from 'prop-types'

import Tracks from '.'
import Element from './Element'

const Track = ({ trackKey, time, elements, isOpen, tracks, clickElement, clickTrack, style }) => (
  <div className="tr-track">
    <div className="rt-track__elements" style={style}>
      {elements
        .filter(({ start, end }) => end > start)
        .map(element => (
          <Element key={element.id} time={time} clickElement={clickElement} {...element} />
        ))}
      {clickTrack && style && (
        <div
          className="rt-track__collider"
          onClick={() => {
            console.log(trackKey)
            clickTrack(trackKey)
          }}
          style={{ height: style.height }}
        />
      )}
    </div>
    {isOpen && tracks && tracks.length > 0 && (
      <Tracks time={time} tracks={tracks} clickElement={clickElement} clickTrack={clickTrack} />
    )}
  </div>
)

Track.propTypes = {
  trackKey: PropTypes.number,
  time: PropTypes.shape({}).isRequired,
  isOpen: PropTypes.bool,
  elements: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({})),
  clickElement: PropTypes.func,
  clickTrack: PropTypes.func,
}

Track.defaultProps = {
  clickElement: undefined,
  clickTrack: undefined,
}

export default Track
