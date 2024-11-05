export type Durations = 'short' | 'long'

export interface State {
  duration: Durations,
  settings: { [key: string]: boolean }
}