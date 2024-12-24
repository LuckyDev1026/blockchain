import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'

const config: HardhatUserConfig = {
  solidity: '0.8.28',
  networks: {
    binance: {
      url: `https://bsc-dataseed.binance.org/`,
      accounts: [
        'a7d9da0c366d6c31bc3000375cb25efa52b5228054e1d8590f98307d97808189',
      ],
    },
  },
}

export default config
