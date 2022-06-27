import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
// eslint-disable-next-line import/no-unresolved
import { Web3ReactContextInterface } from '@web3-react/core/dist/types'
import {
  InjectedConnector,
  NoEthereumProviderError,
} from '@web3-react/injected-connector'
import { useEffect } from 'react'

export const injectedConnector = new InjectedConnector({})

interface IUseWalletResult
  extends Omit<Web3ReactContextInterface<Web3Provider>, 'activate'> {
  isConnected: boolean
  activate: (onActivateError?: (error: Error) => void | undefined) => void
  errorIsNoEthereumProviderError: (error: Error) => boolean
  deactivate: () => void
}

let connect = async (callback: () => void) => {
  const isAuthorized = await injectedConnector.isAuthorized()
  if (isAuthorized) callback()
}

const useWallet = (): IUseWalletResult => {
  const { activate, deactivate, account, chainId, ...rest } =
    useWeb3React<Web3Provider>()
  const isConnected = !!account

  const doActivate = (onActivateError?: (error: Error) => void | undefined) => {
    activate(injectedConnector, onActivateError, false)
  }

  const errorIsNoEthereumProviderError = (error: Error) =>
    error instanceof NoEthereumProviderError

  useEffect(() => {
    // Try to connect only the first time
    connect(() => activate(injectedConnector, undefined, false))
    connect = async () => {}
  }, [])

  return {
    account,
    chainId,
    ...rest,
    isConnected,
    activate: doActivate,
    errorIsNoEthereumProviderError,
    deactivate: () => deactivate(),
  }
}

export default useWallet
