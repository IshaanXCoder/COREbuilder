import { http, createConfig } from 'wagmi'
import { coreMainnet, coreTestnet } from '@/chains/chain'

export const config = createConfig({
  chains: [coreTestnet, coreMainnet],
  transports: {
    [coreTestnet.id]: http(),
    [coreMainnet.id]: http(),
  },
})