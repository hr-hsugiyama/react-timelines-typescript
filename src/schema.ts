export interface IdTitle {
  id: string
  title: string
}

export interface Element {
  id: number
  start: Date
  end: Date
  style: Record<string, string>

  [prop: string]: any
}

export interface TrackElement extends IdTitle {
  elements: Element[]
}

export interface Track extends IdTitle {
  elements: Element[]
  tracks: TrackElement[]
  hasButton?: boolean
  link?: string
  isOpen?: boolean
  style?: Record<string, string>

  [prop: string]: any
}

export type ToggleTrackOpen = (track: Track) => void
export type ClickTrackButton = (track: Track) => JSX.Element
export type CornerDomAdd = () => JSX.Element

export interface Scale {
  start: Date
  end: Date
  zoom: number
  zoomMin?: number
  zoomMax?: number
  minWidth?: number
}

export interface TimeCell extends IdTitle {
  start: Date
  end: Date
}

export interface Sticky {
  isSticky: boolean
  headerHeight: number
  sidebarWidth: number
}

export interface Timebar extends IdTitle {
  cells: TimeCell[]
  useAsGrid?: boolean
  style: Record<string, string>
}
