export interface Settings {
  duration: 'short' | 'long'
  toggles: { [key: string]: {
    label: string,
    active: boolean,
    disabled: boolean
  }}
}