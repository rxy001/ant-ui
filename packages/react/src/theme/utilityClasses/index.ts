import { map } from '@nex-ui/utils'
import { layout, type Layout } from './layout.css'
import { flex, type Flex } from './flex.css'
import { interactivity, type Interactivity } from './interactivity.css'
import { typography, type Typography } from './typography.css'
import { borders, type Borders } from './borders.css'

type Classes = Array<
  (Layout | Flex | Interactivity | Typography | Borders)[number]
>

const utilityClasses = [layout, flex, interactivity, typography, borders]

export function applyUtilityClasses(classes: Classes): string {
  return map(utilityClasses, (func) => func(classes as any))
    .filter((v) => !!v)
    .join(' ')
}
