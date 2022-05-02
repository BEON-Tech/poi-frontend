import config from "@config"

interface INetworkExplorers {
  [key: string]: string
}

const NETWORK_EXPLORER_URLS: INetworkExplorers = {
  '1': 'https://etherscan.io',
  '42': 'https://kovan.etherscan.io',
}

const openTransactionExplorer = (hash: string) => {
  const chainId = config.validChainId.toString()
  const url = `${NETWORK_EXPLORER_URLS[chainId]}/tx/${hash}`
  window.open(url, '_blank')
}
  
export default openTransactionExplorer