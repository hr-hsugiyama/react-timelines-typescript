import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Controls from './components/Controls'
import Layout from './components/Layout'
import createTime from './utils/time'

const UNKNOWN_WIDTH = -1

export const Timeline = props => {
  const timelineViewportWidth = UNKNOWN_WIDTH
  const sidebarWidth = UNKNOWN_WIDTH

  const [state, setState] = useState({
    time: createTime({ ...props.scale, viewportWidth: timelineViewportWidth }),
    timelineViewportWidth,
    sidebarWidth,
  })

  // eslint-disable-next-line camelcase
  const UNSAFE_componentWillReceiveProps = nextProps => {
    const { scale } = props
    const { timelineViewportWidth } = state

    if (nextProps.scale !== scale) {
      const time = createTime({
        ...nextProps.scale,
        viewportWidth: timelineViewportWidth,
      })
      setState({ time })
    }
  }

  const handleLayoutChange = ({ timelineViewportWidth, sidebarWidth }, cb) => {
    const { scale } = props
    const time = createTime({
      ...scale,
      viewportWidth: timelineViewportWidth,
    })
    setState(
      {
        time,
        timelineViewportWidth,
        sidebarWidth,
      },
      cb
    )
  }

  const {
    isOpen = true,
    toggleOpen,
    zoomIn,
    zoomOut,
    scale: { zoom, zoomMin, zoomMax },
    tracks,
    now,
    timebar,
    toggleTrackOpen,
    enableSticky = false,
    scrollToNow,
    clickElement,
    clickTrackButton,
    cornerDomAdd,
  } = props

  return (
    <div className="rt">
      <Controls
        isOpen={isOpen}
        toggleOpen={toggleOpen}
        zoomIn={zoomIn}
        zoomOut={zoomOut}
        zoom={zoom}
        zoomMin={zoomMin}
        zoomMax={zoomMax}
      />
      <Layout
        enableSticky={enableSticky}
        now={now}
        tracks={tracks}
        timebar={timebar}
        toggleTrackOpen={toggleTrackOpen}
        scrollToNow={scrollToNow}
        time={state.time}
        isOpen={isOpen}
        onLayoutChange={handleLayoutChange}
        timelineViewportWidth={state.timelineViewportWidth}
        sidebarWidth={state.sidebarWidth}
        clickElement={clickElement}
        clickTrackButton={clickTrackButton}
        cornerDomAdd={cornerDomAdd}
      />
    </div>
  )
}

Timeline.propTypes = {
  scale: PropTypes.shape({
    start: PropTypes.instanceOf(Date).isRequired,
    end: PropTypes.instanceOf(Date).isRequired,
    zoom: PropTypes.number.isRequired,
    zoomMin: PropTypes.number,
    zoomMax: PropTypes.number,
    minWidth: PropTypes.number,
  }),
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func,
  zoomIn: PropTypes.func,
  zoomOut: PropTypes.func,
  clickElement: PropTypes.func,
  clickTrackButton: PropTypes.func,
  timebar: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  now: PropTypes.instanceOf(Date),
  toggleTrackOpen: PropTypes.func,
  enableSticky: PropTypes.bool,
  scrollToNow: PropTypes.bool,
  cornerDomAdd: PropTypes.func,
}
