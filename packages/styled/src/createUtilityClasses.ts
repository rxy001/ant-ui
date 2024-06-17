import { style, type StyleRule } from '@vanilla-extract/css'
import { forEach, map } from '@nex-ui/utils'

type Styles = Record<string, StyleRule>

const existingKeys = new Set()

export const createUtilityClasses = <S extends Styles>(styles: S) => {
  const utilityClasses: {
    [key in keyof S]?: string
  } = {}

  forEach(styles, (value: StyleRule, key: keyof S) => {
    if (existingKeys.has(key)) {
      throw new Error(
        `Error: The same class name already exists. ${String(key)}`,
      )
    } else {
      utilityClasses[key] = style(value)
      existingKeys.add(key)
    }
  })

  return function applyUtilityClasses(classes: (keyof S)[]) {
    return map(classes, (className: keyof S) => utilityClasses[className])
      .filter((v?: string) => !!v)
      .join(' ')
  }
}

export type UtilityClasses<T extends (args: any[]) => string> = T extends (
  args: infer P,
) => any
  ? P
  : never
