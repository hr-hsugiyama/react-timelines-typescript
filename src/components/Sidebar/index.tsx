import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import Body from './Body'
import { ClickTrackButton, CornerDomAdd, Sticky, Timebar, ToggleTrackOpen, Track } from '../../schema'

export interface SidebarProps {
  timebar: Timebar[]
  tracks?: Track[]
  toggleTrackOpen?: ToggleTrackOpen
  sticky?: Sticky
  clickTrackButton?: ClickTrackButton
  cornerDomAdd?: CornerDomAdd
}

const Sidebar = ({ timebar, tracks, toggleTrackOpen, sticky, clickTrackButton, cornerDomAdd }: SidebarProps) => (
  <div className="rt-sidebar">
    <Header timebar={timebar} sticky={sticky} cornerDomAdd={cornerDomAdd} />
    <Body tracks={tracks} toggleTrackOpen={toggleTrackOpen} clickTrackButton={clickTrackButton} />
  </div>
)

Sidebar.propTypes = {
  timebar: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      style: PropTypes.object,
    }).isRequired
  ).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({})),
  toggleTrackOpen: PropTypes.func,
  sticky: PropTypes.shape({}),
  clickTrackButton: PropTypes.func,
  cornerDomAdd: PropTypes.func,
}

export default Sidebar
