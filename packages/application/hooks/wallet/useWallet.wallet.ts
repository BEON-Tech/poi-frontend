import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
// eslint-disable-next-line import/no-unresolved
import { Web3ReactContextInterface } from '@web3-react/core/dist/types'
import { InjectedConnector } from '@web3-react/injected-connector'
import { useEffect } from 'react'

export const injectedConnector = new InjectedConnector({})

interface IUseWalletResult
  extends Omit<Web3ReactContextInterface<Web3Provider>, 'activate'> {
  isConnected: boolean,
  activate: (
    onError?: ((error: Error) => void) | undefined,
    throwErrors?: boolean | undefined
  ) => void
  deactivate: () => void
}

let connect = async (callback: () => void) => {
  const isAuthorized = await injectedConnector.isAuthorized()
  if (isAuthorized) callback()
}

const useWallet = (): IUseWalletResult => {
  const { activate, deactivate, account, ...rest } = useWeb3React<Web3Provider>()
  const isConnected = !!account

  useEffect(() => {
    // Try to connect only the first time
    connect(() => activate(injectedConnector, undefined, false))
    connect = async () => {}
  }, [])

  return {
    account,
    ...rest,
    isConnected,
    activate: (onError, throwErrors = false) =>
      activate(injectedConnector, onError, throwErrors),
    deactivate: () => deactivate(),
  }
}

export default useWallet
