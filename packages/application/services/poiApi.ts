import {
  TOKENS,
  NETWORK_NAMES
} from '@services/contracts/tx.contract'

export const registerDonationTransacion = (tx, tokenSymbol, amount, chainId) => {
  const token = TOKENS.find(({ symbol }) => symbol === tokenSymbol)
  const network = NETWORK_NAMES[chainId]
  const params = {
    "type": "donation",
    "senderAddress": tx.from,
    "network": network || "unknown",
    "hash" : tx.hash,
    "tokenName": tokenSymbol,
    "tokenAddress": token?.address || "0x0",
    "amount": amount,
  }

  return fetch('http://localhost:8080/transactions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  })
}

