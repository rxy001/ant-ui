import { defineVariants } from '@nex-ui/css-system'

export const wave = defineVariants({
  base: {
    position: 'absolute',
    inset: '-1px',
    userSelect: 'none',
    pointerEvents: 'none',
  },
})
