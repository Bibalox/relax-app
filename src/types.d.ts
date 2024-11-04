export type Durations = 'short' | 'long'

export type GlobalState = {
  duration: Durations,
  settings: { [key: string]: boolean }
}