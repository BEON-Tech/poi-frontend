import { Certification, Donation } from '@constants/types'

export interface CertificationData {
  data: Certification[]
  hasMore: boolean
}

export interface DonationData {
  data: Donation[]
  hasMore: boolean
}
