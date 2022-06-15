import Config from '@config'
import keys, { TRANSACTION_TYPE_TO_LANGUAGE_KEY } from '@i18n/keys'
import { TransactionType } from '@constants/types'

import { CertificationData, DonationData } from './types'

export interface IGetLatestCertificationsParams {
  limit?: number
  offset?: number
}

const createQueryStringParams = (params: Record<string, any>) =>
  Object.keys(params)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    )
    .join('&')

export const getLatestCertifications = async ({
  limit = 3,
  offset = 1,
}): Promise<CertificationData> => {
  const params: Record<string, any> = { limit, offset }
  const queryStringParams = createQueryStringParams(params)
  const { data } = await fetch(
    `${Config.apiURL}/applications?${queryStringParams}`
  )
    .then((res) => res.json())
    .catch(() => ({ data: [], hasMore: false }))

  return { data, hasMore: false }
}

const transformDonationType = (type: TransactionType): string => {
  const value = TRANSACTION_TYPE_TO_LANGUAGE_KEY[type]
  return value || keys.transactions.genericTransaction
}

const amountDivision = 1000 * 1000 * 1000 * 1000 * 1000 * 1000

export const getLatestDonations = async ({
  limit = 3,
  offset = 1,
}): Promise<DonationData> => {
  const params: Record<string, any> = { limit, page: offset }
  const queryStringParams = createQueryStringParams(params)
  const { data, ...response } = await fetch(
    `${Config.apiURL}/transactions?${queryStringParams}`
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
