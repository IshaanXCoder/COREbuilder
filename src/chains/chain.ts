import { defineChain } from 'viem';

// Core Mainnet (Chain ID 1116)
export const coreMainnet = defineChain({
  id: 1116,
  name: 'Core',
  network: 'core',
  nativeCurrency: {
    decimals: 18,
    name: 'Core',
    symbol: 'CORE',
  },
  rpcUrls: {
    default: {
      http: [
        process.env.NEXT_PUBLIC_CORE_RPC_MAINNET || 'https://rpc.coredao.org',
      ],
    },
    public: {
      http: [
        process.env.NEXT_PUBLIC_CORE_RPC_MAINNET || 'https://rpc.coredao.org',
      ],
    },
  },
  blockExplorers: {
    default: {
      name: 'Core Scan',
      url:
        process.env.NEXT_PUBLIC_CORE_EXPLORER_MAINNET || 'https://scan.coredao.org',
    },
  },
});

// Core Testnet (Latest - Chain ID 1114)
export const coreTestnet = defineChain({
  id: 1114,
  name: 'Core Testnet',
  network: 'core-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Core Testnet',
    symbol: 'tCORE',
  },
  rpcUrls: {
    default: {
      http: [
        process.env.NEXT_PUBLIC_CORE_RPC_TESTNET || 'https://rpc.test.btcs.network',
      ],
    },
    public: {
      http: [
        process.env.NEXT_PUBLIC_CORE_RPC_TESTNET || 'https://rpc.test.btcs.network',
      ],
    },
  },
  blockExplorers: {
    default: {
      name: 'Core Scan Testnet',
      url:
        process.env.NEXT_PUBLIC_CORE_EXPLORER_TESTNET ||
        'https://scan.test.btcs.network',
    },
  },
});