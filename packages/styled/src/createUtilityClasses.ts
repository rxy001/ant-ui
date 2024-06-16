import { style, type StyleRule } from '@vanilla-extract/css'
import { forEach, map } from '@nex-ui/utils'

type Styles = Record<string, StyleRule>

type UtilityClasses<T extends Styles> = {
  [key in keyof T]?: string
}

const utilityClasses: UtilityClasses<Styles> = {}

export const createUtilityClasses = (styles: Styles) => {
  forEach(styles, (value: StyleRule, key: string) => {
    if (utilityClasses[key]) {
      throw new Error(
        `Error: The same class name already exists. ${String(key)}`,
      )
    } else {
      utilityClasses[key] = style(value)
    }
  })
}

export function applyUtilityClasses(
  classes: (keyof typeof utilityClasses)[],
): string {
  return map(
    classes,
    (className: keyof typeof utilityClasses) => utilityClasses[className],
  )
    .filter((v: string | undefined) => !!v)
    .join(' ')
}
