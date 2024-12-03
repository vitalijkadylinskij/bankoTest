export interface MacroSettings {
  id: string
  type: string
  values: {
    [key in string | number]: {
      [key in string]: {
        value: number
        probability: number
      }
    }
  }
}
