import {
  EXPENSE_TYPE,
  DONATION_TYPE,
  POH_FUNDING_TYPE,
  CERTIFIER_PAYMENT_TYPE,
} from '.'

export interface Certification {
  id: string
  image: string
  detailsLink: string
  date: string
}

export interface Donation {
  id: string
  type: string
  amount: string
  transactionUrl: string
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
