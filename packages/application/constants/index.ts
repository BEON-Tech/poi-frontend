/* eslint-disable camelcase */
export * from './abis'

export const Chains = {
  Mainnet: { key: 'Mainnet', id: 1 },
  Ropsten: { key: 'Ropsten', id: 3 },
  Rinkeby: { key: 'Rinkeby', id: 4 },
  Goerli: { key: 'Goerli', id: 5 },
  Kovan: { key: 'Kovan', id: 42 },
  BSC: { key: 'BSC', id: 56 },
  BSCTestnet: { key: 'BSCTestnet', id: 97 },
  xDai: { key: 'xDai', id: 100 },
  Polygon: { key: 'Polygon', id: 137 },
  Theta: { key: 'Theta', id: 361 },
  ThetaTestnet: { key: 'ThetaTestnet', id: 365 },
  Moonriver: { key: 'Moonriver', id: 1285 },
  Mumbai: { key: 'Mumbai', id: 80001 },
  Harmony: { key: 'Harmony', id: 1666600000 },
  Palm: { key: 'Palm', id: 11297108109 },
  Localhost: { key: 'Localhost', id: 1337 },
  Hardhat: { key: 'Hardhat', id: 31337 },
  Fantom: { key: 'Fantom', id: 250 },
  Avalanche: { key: 'Avalanche', id: 43114 },
  Songbird: { key: 'Songbird', id: 19 },
  MoonbaseAlpha: { key: 'MoonbaseAlpha', id: 1287 },
}

export const CHAIN_NAMES = {
  [Chains.Mainnet.key]: 'Mainnet',
  [Chains.Ropsten.key]: 'Ropsten',
  [Chains.Kovan.key]: 'Kovan',
  [Chains.Rinkeby.key]: 'Rinkeby',
  [Chains.Goerli.key]: 'Goerli',
  [Chains.BSC.key]: 'BSC',
  [Chains.BSCTestnet.key]: 'BSCTestnet',
  [Chains.xDai.key]: 'xDai',
  [Chains.Polygon.key]: 'Polygon',
  [Chains.Theta.key]: 'Theta',
  [Chains.ThetaTestnet.key]: 'ThetaTestnet',
  [Chains.Moonriver.key]: 'Moonriver',
  [Chains.Mumbai.key]: 'Mumbai',
  [Chains.Harmony.key]: 'Harmony',
  [Chains.Palm.key]: 'Palm',
  [Chains.Localhost.key]: 'Localhost',
  [Chains.Hardhat.key]: 'Hardhat',
  [Chains.Fantom.key]: 'Fantom',
  [Chains.Avalanche.key]: 'Avalanche',
  [Chains.Songbird.key]: 'Songbird',
  [Chains.MoonbaseAlpha.key]: 'Moonbase Alpha',
}

export const CHAIN_URLS = {
  [Chains.Kovan.key]: 'https://api-kovan.poh.dev/',
}

// https://kovan.etherscan.io/address/0x9c9DB8354652d0cEf9097cFe1e9eB893fD743958

// UBI v2 contract
export const UBIv2_CONTRACT_ADDRESS =
  '0xD037C59786615848E8988Af8356E3316b1E08018'

export const UBIv2Methods = {
  createStream: { name: 'createStream', filter: 'CreateStream' },
  accruedPerSecond: { name: 'accruedPerSecond' },
  getStreamsOf: { name: 'getStreamsOf' },
  getStream: { name: 'getStream' },
  startAccruing: { name: 'startAccruing' },
}

// Proof of Humanity contract
export const PoH_CONTRACT_ADDRESS = '0x73bcce92806bce146102c44c4d9c3b9b9d745794'

export const PoHMethods = {
  isRegistered: { name: 'isRegistered' },
}
