import { createContext } from '@nex-ui/utils'
import { useMemo } from 'react'
import type { NexProviderProps, NexContext } from './types'

const [NexContextProvider, useNexContext] = createContext<NexContext>({
  contextName: 'NexContext',
  providerName: '<NexProvider />',
  hookName: 'useNexContext',
})

export function NexProvider(props: NexProviderProps) {
  const { theme, prefix = 'nexui', children } = props

  const config = useMemo(() => ({ theme, prefix }), [theme, prefix])

  return <NexContextProvider value={config}>{children}</NexContextProvider>
}

export { useNexContext }
