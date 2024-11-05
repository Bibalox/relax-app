export type Durations = 'short' | 'long'

export type Settings = { [key: string]: {
  label: string,
  active: boolean,
  disabled: boolean
} }