import { CertificationData, DonationData } from './types'

export const getLatestCertifications =
  async (): Promise<CertificationData> => ({
    data: [
      {
        id: '1',
        image: 'https://picsum.photos/100/88.jpg',
        date: '01/09/2022' as any,
        range: '9:00  -  9:30pm',
        detailsLink: 'https://www.audi.com/en.html',
      },
      {
        id: '2',
        image: 'https://picsum.photos/100/88.jpg',
        date: '01/09/2022' as any,
        range: '9:00  -  9:30pm',
        detailsLink: 'https://www.audi.com/en.html',
      },
      {
        id: '3',
        image: 'https://picsum.photos/100/88.jpg',
        date: '01/09/2022' as any,
        range: '9:00  -  9:30pm',
        detailsLink: 'https://www.audi.com/en.html',
      },
    ],
    hasMore: true,
  })

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
