import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider as EtherProjectWeb3Provider } from '@ethersproject/providers'

interface IWeb3Provider {
  children: JSX.Element | JSX.Element[]
}

const getLibrary = (provider: any): EtherProjectWeb3Provider => {
  const library = new EtherProjectWeb3Provider(provider)
  library.pollingInterval = 12000
  return library
}

const Web3Provider = ({ children }: IWeb3Provider) => (
  <Web3ReactProvider getLibrary={getLibrary}>{children}</Web3ReactProvider>
)

export default Web3Provider
