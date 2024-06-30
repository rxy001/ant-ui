import { button, wave } from './components'
import { colors, typographt, spacing } from './tokens'

export const defaultTheme = {
  components: {
    button,
    wave,
  },
  colors,
  typographt,
  spacing,
}

export type DefaultTheme = typeof defaultTheme
