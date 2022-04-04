import { DESIGN_AND_MARKETING_TAG, DEVELOPER_TAG, SOCIAL_TEAM_TAG } from '.'

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
