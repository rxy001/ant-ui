import type { UtilityClasses } from '@nex-ui/styled'
import { createUtilityClasses } from '@nex-ui/styled'

export const typography = createUtilityClasses({
  // text-decoration
  'decoration-none': {
    textDecoration: 'none',
  },
})

export type Typography = UtilityClasses<typeof typography>
