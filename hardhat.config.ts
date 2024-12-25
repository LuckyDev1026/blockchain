import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'

const config: HardhatUserConfig = {
  solidity: '0.8.28',
  networks: {
    binance: {
      url: `https://bsc-testnet-rpc.publicnode.com`,
      accounts: [
        '94a599d09fb3d108b2a3a059c01795f5880d8907a53ca33318b038474724c05a',
      ],
    },
  },
}

export default config
