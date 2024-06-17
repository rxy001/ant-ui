import type { UtilityClasses } from '@nex-ui/styled'
import { createUtilityClasses } from '@nex-ui/styled'

export const interactivity = createUtilityClasses({
  // user-select
  'select-none': {
    userSelect: 'none',
  },

  // cursor
  'cursor-not-allowed': {
    cursor: 'not-allowed',
  },
  'cursor-pointer': {
    cursor: 'pointer',
  },
  'cursor-default': {
    cursor: 'default',
  },
})

export type Interactivity = UtilityClasses<typeof interactivity>
