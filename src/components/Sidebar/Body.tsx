import React from 'react'
import PropTypes from 'prop-types'

import TrackKeys from './TrackKeys'
import { ClickTrackButton, ToggleTrackOpen, Track } from '../../schema'

interface BodyProps {
  tracks?: Track[]
  toggleTrackOpen?: ToggleTrackOpen
  clickTrackButton?: ClickTrackButton
}

const Body = ({ tracks, toggleTrackOpen, clickTrackButton }: BodyProps): JSX.Element => (
  <div className="rt-sidebar__body">
    <TrackKeys tracks={tracks} toggleOpen={toggleTrackOpen} clickTrackButton={clickTrackButton} />
  </div>
)

Body.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape({})),
  toggleTrackOpen: PropTypes.func,
  clickTrackButton: PropTypes.func,
}

export default Body
