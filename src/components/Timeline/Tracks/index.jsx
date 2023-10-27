import React from 'react'
import PropTypes from 'prop-types'

import Track from './Track'

const Tracks = ({ time, tracks, clickElement, clickTrack }) => (
  <div className="rt-tracks">
    {tracks.map(({ id, churchId, title, elements, isOpen, tracks: children, style }) => (
      <Track
        key={id}
        title={title}
        churchId={churchId}
        time={time}
        elements={elements}
        isOpen={isOpen}
        tracks={children}
        clickElement={clickElement}
        clickTrack={clickTrack}
        style={style}
      />
    ))}
  </div>
)

Tracks.propTypes = {
  time: PropTypes.shape({}).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({})),
  clickElement: PropTypes.func,
  clickTrack: PropTypes.func,
}

export default Tracks
