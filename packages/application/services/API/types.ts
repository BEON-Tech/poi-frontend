import { Certification, Donation, FullCertification, Transaction } from '@constants/types'

export interface CertificationData {
  data: Certification[]
  hasMore: boolean
}

export interface DonationData {
  data: Donation[]
  hasMore: boolean
}

export interface CertificationsFullData {
  data: FullCertification[]
  total: number,
  currentPage: number,
  totalPages: number
}

export interface TransactionsFullData {
  data: Transaction[]
  total: number,
  currentPage: number,
  totalPages: number
}
