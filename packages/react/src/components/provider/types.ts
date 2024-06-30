import type { ReactNode } from 'react'
import type { DefaultTheme } from '@theme'

export type NexContext = {
  theme?: DefaultTheme
  prefix?: string
}

export type NexProviderProps = NexContext & {
  children?: ReactNode
}
