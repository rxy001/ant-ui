import type { UtilityClasses } from '@nex-ui/styled'
import { createUtilityClasses } from '@nex-ui/styled'

export const layout = createUtilityClasses({
  // display
  flex: {
    display: 'flex',
  },
  block: {
    display: 'block',
  },
  'inline-block': {
    display: 'inline-block',
  },
  inline: {
    display: 'inline',
  },
  grid: {
    display: 'grid',
  },

  // box-sizing
  'box-border': {
    boxSizing: 'border-box',
  },

  // position
  absolute: {
    position: 'absolute',
  },
  relative: {
    position: 'relative',
  },
  fixed: {
    position: 'fixed',
  },
})

export type Layout = UtilityClasses<typeof layout>
