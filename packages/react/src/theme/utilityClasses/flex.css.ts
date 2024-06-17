import type { UtilityClasses } from '@nex-ui/styled'
import { createUtilityClasses } from '@nex-ui/styled'

export const flex = createUtilityClasses({
  'flex-1': {
    flex: 1,
  },

  // align-item
  'items-start': {
    alignItems: 'start',
  },
  'items-center': {
    alignItems: 'center',
  },
  'items-end': {
    alignItems: 'end',
  },

  // justify-content
  'justify-start': {
    justifyContent: 'flex-start',
  },
  'justify-center': {
    justifyContent: 'center',
  },
})

export type Flex = UtilityClasses<typeof flex>
