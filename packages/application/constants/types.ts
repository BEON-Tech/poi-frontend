import {
  EXPENSE_TYPE,
  DONATION_TYPE,
  POH_FUNDING_TYPE,
  CERTIFIER_PAYMENT_TYPE,
} from '.'

export interface Program {
  id: string
  title: string
  place: string
  version: string
  createdAt: string
  updatedAt: string
}

export interface Certifier {
  id: string
  firstName: string
  lastName: string
  profession: string
  didSocialWork: boolean
  didGroundWork: boolean
  walletAddress: string
  status: string
  createdAt: string
}

export interface Applicant {
  id: string
  firstName: string
  age: number
  zipCode: string
  peopleLivingTogether: number
  hasDependentRelative: boolean
  hasDisabledFamilyMember: boolean
  hasJob: boolean
  knownFinancialInstruments: string
  walletAddress: string
  createdAt: string
  updatedAt: string
}

export interface Certification {
  id: string
  status: 'pending' | 'approved' | 'rejected',
  certifier?: Certifier
  applicant?: Applicant
  program?: Program
  createdAt: string
}

export interface Donation {
  id: string
  type: string
  amount: string
  transactionUrl: string
}

export interface FullCertification {
  id: string
  hasAttendedTheAppointment: boolean
  photoMatches: boolean
  idCardMatches: boolean
  includedInAgeRange: boolean
  neighborhood: boolean
  additionalInfo: string
  status: 'pending' | 'approved' | 'rejected',
  createdAt: string
  updatedAt: string
  certifier?: Certifier
  applicant?: Applicant
  program?: Program
  imageUrl: string
}

export interface Transaction {
  id: number
  type: TransactionType
  senderAddress: string
  recipientAddress: string | null
  network: string
  hash: string
  tokenAddress: string | null
  tokenName: string
  amount: string
  status: string
  createdAt: string
  updatedAt: string
  transactionUrl: string
}

const AVAILABLE_TRANSACTIONS = [
  EXPENSE_TYPE,
  DONATION_TYPE,
  POH_FUNDING_TYPE,
  CERTIFIER_PAYMENT_TYPE,
] as const

export type TransactionType = typeof AVAILABLE_TRANSACTIONS[number]
