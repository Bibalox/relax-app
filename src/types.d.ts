type Durations = 'short' | 'long'

export interface Settings {
  duration: {
    options: {
      id: Durations,
      label: string,
      value: number
    }[],
    active: Durations
  }

  toggles: { [key: string]: {
    label: string,
    active: boolean,
    disabled: boolean
  }}
}