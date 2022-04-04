import Config from '@config'

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
  offset = 0,
}): Promise<CertificationData> => {
  const params: Record<string, any> = { limit, offset }
  const queryStringParams = createQueryStringParams(params)
  const { data, ...response } = await fetch(
    `${Config.apiURL}/certifiers?${queryStringParams}`
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

export const getLatestDonations = async ({
  limit = 3,
  offset = 0,
}): Promise<DonationData> => {
  const params: Record<string, any> = { limit, offset }
  const queryStringParams = createQueryStringParams(params)
  const { data, ...response } = await fetch(
    `${Config.apiURL}/transactions?${queryStringParams}`
  )
    .then((res) => res.json())
    .catch(() => ({ data: [], hasMore: false }))
  const transformedData = data.map(
    ({ amount, type, transactionUrl, id, tokenName }: any) => ({
      id,
      amount: `${amount} ${tokenName}`,
      type,
      transactionUrl,
    })
  )
  return { ...response, data: transformedData }
}
// ({
//   data: [
//     {
//       id: '1',
//       type: 'Crowfounfing Pool',
//       amount: '500 USDT',
//       transactionUrl: 'https://www.audi.com/en.html',
//     },
//     {
//       id: '2',
//       type: 'Crowfounfing Pool',
//       amount: '300 DAO',
//       transactionUrl: 'https://www.audi.com/en.html',
//     },
//     {
//       id: '3',
//       type: 'Crowfounfing Pool',
//       amount: '500 USDT',
//       transactionUrl: 'https://www.audi.com/en.html',
//     },
//   ],
//   hasMore: true,
// })
