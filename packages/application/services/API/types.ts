import { Certification, Donation, Transaction } from '@constants/types'

export interface CertificationData {
  data: Certification[]
  hasMore: boolean
}

export interface DonationData {
  data: Donation[]
  hasMore: boolean
}

export interface TransactionsFullData {
  data: Transaction[]
  total: number,
  currentPage: number,
  totalPages: number
}
