import { BigNumber } from '@ethersproject/bignumber'
// import { errors } from 'ethers';
import { IEtherStream, IStream } from './types.contract'

export const transformBigNumber = (value: BigNumber) =>
  BigNumber.from(value).toNumber()

export const transformStream = (etherStream: IEtherStream): IStream => ({
  sender: etherStream.sender,
  recipient: etherStream.recipient,
  deposit: transformBigNumber(etherStream.deposit),
  tokenAddress: etherStream.tokenAddress,
  startTime: new Date(transformBigNumber(etherStream.startTime) * 1000),
  stopTime: new Date(transformBigNumber(etherStream.stopTime) * 1000),
  remainingBalance: transformBigNumber(etherStream.remainingBalance),
  ratePerSecond: transformBigNumber(etherStream.ratePerSecond),
})

// export const isDroppedAndReplacedTransaction = (e: any) =>
//   e?.code === errors.TRANSACTION_REPLACED && e?.replacement && (e?.reason === 'repriced' || e?.cancelled === false);
