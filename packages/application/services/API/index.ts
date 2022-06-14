import { keys } from '@i18n'
import { parseEther, parseUnits } from '@ethersproject/units'
import { TOKENS } from '@services/contracts/tx.contract'
import config from '@config'
import { TransactionType } from '@constants/types'
import { CertificationData, CertificationsFullData, DonationData, TransactionsFullData } from './types'

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
    tokenAddress: token?.address ? token?.address[config.validChainId] : null,
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

const createQueryStringParams = (params: Record<string, any>) =>
  Object.keys(params)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    )
    .join('&')

export const getLatestCertifications = async ({
  limit = 3,
  offset = 0,
}): Promise<CertificationData> => {
  const params: Record<string, any> = { limit, offset }
  const queryStringParams = createQueryStringParams(params)
  const { data, ...response } = await fetch(
    `${config.apiPOI}/certifiers?${queryStringParams}`
  )
    .then((res) => res.json())
    .catch(() => ({ data: [], hasMore: false }))
  const transformedData = data.map(({ cvUrl, avatarUrl, createdAt }: any) => ({
    detailsLink: cvUrl,
    image: avatarUrl,
    date: createdAt,
  }))
  return { ...response, data: transformedData }
}

const transformDonationType = (type: TransactionType): string => {
  const value = keys.transactions[type]
  return value || keys.transactions.genericTransaction
}

const amountDivision = 1000 * 1000 * 1000 * 1000 * 1000 * 1000

export const getLatestDonations = async ({
  limit = 3,
  offset = 0,
}): Promise<DonationData> => {
  const params: Record<string, any> = { limit, offset }
  const queryStringParams = createQueryStringParams(params)
  const { data, ...response } = await fetch(
    `${config.apiPOI}/transactions?${queryStringParams}`
  )
    .then((res) => res.json())
    .catch(() => ({ data: [], hasMore: false }))
  const transformedData = data.map(
    ({ amount, type, transactionUrl, id, tokenName }: any) => ({
      id,
      amount: `${amount / amountDivision} ${tokenName}`,
      type: transformDonationType(type),
      transactionUrl,
    })
  )
  return { ...response, data: transformedData }
}

export const getTransactions = async (
  pageSize = 5,
  pageNumber = 1
): Promise<TransactionsFullData> => {
  const params: Record<string, any> = { limit: pageSize, page: pageNumber }
  const queryStringParams = createQueryStringParams(params)
  const { data, total, pages } = await fetch(
    `${config.apiPOI}/transactions?${queryStringParams}`
  )
    .then((res) => res.json())
    .catch(() => ({ data: [], total: 0, currentPage: 0, totalPages: 0 }))

  return { data, total, currentPage: pageNumber, totalPages: pages }
}

export const getCertifications = async (
  pageSize = 5,
  pageNumber = 1
): Promise<CertificationsFullData> => {
  const params: Record<string, any> = { limit: pageSize, page: pageNumber }
  const queryStringParams = createQueryStringParams(params)
  const { data, total, pages } = await fetch(
    `${config.apiPOI}/applications?${queryStringParams}`
  )
    .then((res) => res.json())
    .catch(() => ({ data: [], total: 0, currentPage: 0, totalPages: 0 }))

  return { data, total, currentPage: pageNumber, totalPages: pages }
}