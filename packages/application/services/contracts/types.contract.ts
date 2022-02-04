import { BigNumber } from '@ethersproject/bignumber'

export interface IEtherStream {
  sender: string
  recipient: string
  deposit: BigNumber
  tokenAddress: string
  startTime: BigNumber
  stopTime: BigNumber
  remainingBalance: BigNumber
  ratePerSecond: BigNumber
}

export interface IStream {
  sender: string
  recipient: string
  deposit: number
  tokenAddress: string
  startTime: Date
  stopTime: Date
  remainingBalance: number
  ratePerSecond: number
}
