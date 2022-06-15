import {
  DESIGN_AND_MARKETING_TAG,
  DEVELOPER_TAG,
  SOCIAL_TEAM_TAG,
  EXPENSE_TYPE,
  DONATION_TYPE,
  POH_FUNDING_TYPE,
  CERTIFIER_PAYMENT_TYPE,
} from '.'

const TAGS = [DESIGN_AND_MARKETING_TAG, DEVELOPER_TAG, SOCIAL_TEAM_TAG] as const

export type TagsType = typeof TAGS[number]

export interface IPerson {
  imagePath: any
  name: string
  role: string
  tags?: TagsType[]
}

export interface IAdvisor {
  imagePath: any
  name: string
  role: string
  littleDescription: string
}

export interface ICard {
  imagePath: any
  name: string
  role?: undefined
  tags?: undefined
}

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

const AVAILABLE_TRANSACTIONS = [
  EXPENSE_TYPE,
  DONATION_TYPE,
  POH_FUNDING_TYPE,
  CERTIFIER_PAYMENT_TYPE,
] as const

export type TransactionType = typeof AVAILABLE_TRANSACTIONS[number]
