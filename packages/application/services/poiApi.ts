import { parseEther, parseUnits } from '@ethersproject/units'
import { TOKENS } from '@services/contracts/tx.contract'
import config from '@config'

export const registerDonationTransacion = (
  transaction: any,
  tokenSymbol: string,
  amount: number
) => {
  const token = TOKENS.find(({ symbol }) => symbol === tokenSymbol)
  let amountString = ''
  if (tokenSymbol === 'ETH') {
    amountString = parseEther(amount.toString()).toString()
  } else {
    amountString = parseUnits(amount.toString(), token?.decimals).toString()
  }

  const params = {
    type: 'donation',
    senderAddress: transaction.from,
    recipientAddress: config.donationAddressPOI,
    network: 'Ethereum',
    hash: transaction.hash,
    tokenName: tokenSymbol,
    tokenAddress: (token?.address ? token?.address[config.validChainId] : null),
    amount: amountString,
  }

  return fetch(`${config.apiPOI}/transactions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })
}
