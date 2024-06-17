import type { UtilityClasses } from '@nex-ui/styled'
import { createUtilityClasses } from '@nex-ui/styled'

export const borders = createUtilityClasses({
  // outline
  'outline-none': {
    outline: 'none',
  },
})

export type Borders = UtilityClasses<typeof borders>
