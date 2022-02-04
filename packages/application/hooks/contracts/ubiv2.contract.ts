import { useEffect, useState } from 'react'
import { BigNumber } from '@ethersproject/bignumber'

import {
  useContractCall,
  transformBigNumber,
  transformStream,
} from '../../services/contracts'
import { useWallet } from '../wallet'

import { UBIv2_CONTRACT_ADDRESS, UBIv2Methods } from '../../constants'

const {
  createStream: { name: createStreamMethod },
  accruedPerSecond: { name: accruedPerSecondMethod },
  getStreamsOf: { name: getStreamsOfMethod },
  getStream: { name: getStreamMethod },
  startAccruing: { name: startAccruingMethod },
} = UBIv2Methods

const RECIPIENT_ADDRESS = '0x53B5D53101ac06178F419E7888f883C70e6Af7DA'

const MINING_TRANSACTION_STATE = 'Mining'
const CONFIRMING_TRANSACTION_STATE = 'Confirming with 7 blocks'
const CONFIRMED_TRANSACTION_STATE = 'Confirmed'
const REJECTED_TRANSACTION_STATE = 'Rejected'
const CONFIRM_TRANSACTION_NUMBER = 7

interface IUseDelegateToHumanProps {
  onConfirm?: (receipt: any) => void
  onReject?: (error: any) => void
}

const getOperation = (operationState?: string) => ({
  isMining: operationState === MINING_TRANSACTION_STATE,
  isConfirming: operationState === CONFIRMING_TRANSACTION_STATE,
  isConfirmed: operationState === CONFIRMED_TRANSACTION_STATE,
  isRejected: operationState === REJECTED_TRANSACTION_STATE,
})

export const useAccuredPerSecondValue = () => {
  const { active } = useWallet()
  const [data, setData] = useState<any>()
  const [error, setError] = useState<any>()
  const { call: getAccruedValue } = useContractCall(
    'UBIv2',
    accruedPerSecondMethod
  )

  useEffect(() => {
    if (active) {
      getAccruedValue({ addOverridaParams: true })
        .then((value) => setData(transformBigNumber(value)))
        .catch(setError)
    }
  }, [active])

  return { accuredPerSecond: data, error }
}

const ONE_WEEK_AS_SECONDS = 604800

export const useDelegateToHuman = ({
  onConfirm,
  onReject,
}: IUseDelegateToHumanProps = {}) => {
  const { accuredPerSecond } = useAccuredPerSecondValue()

  const [data, setData] = useState()
  const [error, setError] = useState<any>()
  const [transaction, setTransaction] = useState()
  const [operationStateValue, setOperationStateValue] = useState<string>()

  const { call: createStreamFetcher } = useContractCall(
    'UBIv2',
    createStreamMethod
  )

  const createStream = async (percentageNumber: number) => {
    const percentage = percentageNumber / 100
    // Date now + 10 seconds

    const start = Math.round(new Date(Date.now()).getTime() / 1000) + 60
    const end = start + ONE_WEEK_AS_SECONDS

    try {
      const returnValue = await createStreamFetcher({
        contractCallArguments: [
          RECIPIENT_ADDRESS,
          BigNumber.from(accuredPerSecond * percentage).toBigInt(), // ubiPerSecond percentage
          // eslint-disable-next-line camelcase
          UBIv2_CONTRACT_ADDRESS, // tokenAddress
          BigNumber.from(start).toBigInt(), // startTiem
          BigNumber.from(end).toBigInt(), // endTime
        ],
        addOverridaParams: true,
      })
      // Mining
      setTransaction(returnValue)
      setOperationStateValue(MINING_TRANSACTION_STATE)
      const receipt = await returnValue.wait()
      setData(receipt)
      setOperationStateValue(CONFIRMED_TRANSACTION_STATE)
      if (onConfirm) onConfirm(receipt)
    } catch (err) {
      console.log('err', err)
      setOperationStateValue(REJECTED_TRANSACTION_STATE)
      setError(err)
      if (onReject) onReject(err)
    }
  }

  return {
    createStream,
    transaction,
    data,
    error,
    operationStateValue,
    operationState: getOperation(operationStateValue),
  }
}

export const useGetStreams = () => {
  const { account } = useWallet()
  const [data, setData] = useState<any>()
  const [error, setError] = useState<any>()

  const { call: getStreamsOfFetcher } = useContractCall(
    'UBIv2',
    getStreamsOfMethod
  )
  const { call: getStreamFetcher } = useContractCall('UBIv2', getStreamMethod)

  const getStreams = async () => {
    try {
      const streamIds = await getStreamsOfFetcher({
        contractCallArguments: [account],
      })
      const streamsContract = await Promise.all(
        streamIds.map((streamId: any) =>
          getStreamFetcher({ contractCallArguments: [streamId] })
        )
      )
      const streams = streamsContract.map(transformStream)
      setData(streams)
    } catch (err) {
      setError(err)
      console.log(err)
    }
  }

  return { getStreams, error, streams: data }
}

export const useStartAcurring = () => {
  const { account } = useWallet()
  const [done, setDone] = useState<any>(false)
  const [error, setError] = useState<any>()

  const { call: getStartAccruingFetcher } = useContractCall(
    'UBIv2',
    startAccruingMethod
  )

  const startAccruing = async () => {
    try {
      const returnValue = await getStartAccruingFetcher({
        contractCallArguments: [account],
        addOverridaParams: true,
      })
      await returnValue.wait()
      setDone(true)
    } catch (err) {
      console.log(err)
      setDone(false)
      setError(err)
    }
  }

  return { startAccruing, error, done }
}
