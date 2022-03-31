import Config from '@config'

import { CertificationData, DonationData } from './types'

export interface IGetLatestCertificationsParams {
  limit?: number
  offset?: number
}

export const getLatestCertifications = async ({
  limit = 3,
  offset = 0,
}): Promise<CertificationData> => {
  const { data, ...response } = await fetch(
    `${Config.apiURL}/certifiers/latest/${limit}/${offset}`
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

export const getLatestDonations = async (): Promise<DonationData> => ({
  data: [
    {
      id: '1',
      type: 'Crowfounfing Pool',
      amount: '500 USDT',
      etherscanLink: 'https://www.audi.com/en.html',
    },
    {
      id: '2',
      type: 'Crowfounfing Pool',
      amount: '300 DAO',
      etherscanLink: 'https://www.audi.com/en.html',
    },
    {
      id: '3',
      type: 'Crowfounfing Pool',
      amount: '500 USDT',
      etherscanLink: 'https://www.audi.com/en.html',
    },
  ],
  hasMore: true,
})
