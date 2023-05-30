import React from 'react'
import PropTypes from 'prop-types'
import { Sticky, Timebar } from '../../schema'

export interface SidebarHeaderProps {
  sticky?: Sticky
  timebar: Timebar[]
  cornerDomAdd?: () => JSX.Element
}

const Header = ({ timebar, sticky, cornerDomAdd }: SidebarHeaderProps): JSX.Element => {
  return (
    <div style={sticky && sticky.isSticky ? { paddingTop: sticky.headerHeight } : {}}>
      <div
        className={`rt-sidebar__header ${sticky?.isSticky ? 'rt-is-sticky' : ''}`}
        style={sticky && sticky.isSticky ? { width: sticky.sidebarWidth } : {}}
      >
        {cornerDomAdd
          ? cornerDomAdd()
          : timebar.map(({ id, title, style }) => (
              <div key={id} className={title ? 'rt-timebar-key' : ''} style={style}>
                {title}
              </div>
            ))}
      </div>
    </div>
  )
}

Header.propTypes = {
  sticky: PropTypes.shape({
    isSticky: PropTypes.bool.isRequired,
    headerHeight: PropTypes.number.isRequired,
    sidebarWidth: PropTypes.number.isRequired,
  }),
  timebar: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      style: PropTypes.object,
    }).isRequired
  ).isRequired,
  cornerDomAdd: PropTypes.func,
}

export default Header
