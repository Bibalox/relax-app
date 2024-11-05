interface DurationOption {
  label: string,
  value: number
}

export interface Duration {
  options: {
    short: DurationOption
    long: DurationOption
  },
  active: 'short' | 'long'
}

export interface Toggles {
  [key: string]: {
    label: string,
    active: boolean,
    disabled: boolean
  }
}

interface Timers {
  activityTimeout?: ReturnType<typeof setTimeout>
  soundEffectInterval?: ReturnType<typeof setInterval> 
  vibrationInterval?: ReturnType<typeof setInterval> 
}