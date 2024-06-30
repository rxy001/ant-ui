import type { CSSObject } from '@emotion/react'

type BooleanMap<T> = T extends 'true' | 'false' ? boolean : T

type SlotGroups = Record<string, CSSObject>

type BaseVariantGroups = Record<string, Record<string, CSSObject>>

type SlotVariantGroups<S extends SlotGroups | string = string> = Record<
  string,
  Record<string, Partial<Record<keyof S, CSSObject>>>
>

export type CompoundVariantsSelection<
  V extends BaseVariantGroups | SlotVariantGroups,
> = {
  [K in keyof V]?: BooleanMap<keyof V[K]> | BooleanMap<keyof V[K]>[]
}

export type CompoundVariants<
  V extends BaseVariantGroups | SlotVariantGroups,
  S = any,
> = Array<
  CompoundVariantsSelection<V> & {
    css: S extends SlotGroups ? Record<keyof S, CSSObject> : CSSObject
  }
>

type VariantGroups<S> = S extends SlotGroups
  ? SlotVariantGroups<S>
  : BaseVariantGroups

export type VariantSelection<V extends BaseVariantGroups | SlotVariantGroups> =
  {
    [K in keyof V]?: BooleanMap<keyof V[K]>
  }

type VariantsDefinition<
  S extends CSSObject | SlotGroups,
  V extends VariantGroups<S>,
> = {
  slot?: S
  base?: S
  variants?: V
  defaultVariants?: VariantSelection<V>
  compoundVariants?: CompoundVariants<V, S>
}

export type BaseVariantsDefinition<
  B extends CSSObject,
  V extends VariantGroups<B>,
> = Omit<VariantsDefinition<B, V>, 'slot'>

type SlotVariantsDefinition<
  S extends SlotGroups,
  V extends VariantGroups<S>,
> = Omit<VariantsDefinition<S, V>, 'base'>

export function defineVariants<B extends CSSObject, V extends VariantGroups<B>>(
  options: BaseVariantsDefinition<B, V>,
): BaseVariantsDefinition<B, V>
export function defineVariants<
  S extends SlotGroups,
  V extends VariantGroups<S>,
>(options: SlotVariantsDefinition<S, V>): SlotVariantsDefinition<S, V>
export function defineVariants<
  S extends SlotGroups | CSSObject,
  V extends VariantGroups<S>,
>(options: VariantsDefinition<S, V>) {
  return options
}
