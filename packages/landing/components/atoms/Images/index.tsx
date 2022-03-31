import React from 'react'
import { ImageProps } from 'next/image'

import PeopleCenterIntroSection from '../../../assets/images/people_center__intro.png'
import PersonTopIntroSection from '../../../assets/images/person_top__intro.png'
import PersonLeftAboutPOISection from '../../../assets/images/about_poi__left.png'
import PersonBottomAboutPOISection from '../../../assets/images/about_poi__bottom.png'
import Banner from '../../../assets/images/banner.png'
import Logo from '../../../assets/images/logo.png'
import GoldPolygon from '../../../assets/images/gold_polygon.png'
import BannerDescriptionItem1 from '../../../assets/images/banner__description_item_1.png'
import BannerDescriptionItem2 from '../../../assets/images/banner__description_item_2.png'
import BannerDescriptionItem3 from '../../../assets/images/banner__description_item_3.png'
import AssistanceProgramMap from '../../../assets/images/assistance_program__map.png'

import AssistanceProgramAimFirstIcon from '../../../assets/images/assistance_program__aim_first_icon.png'
import AssistanceProgramAimSecondIcon from '../../../assets/images/assistance_program__aim_second_icon.png'
import AssistanceProgramAimThirdIcon from '../../../assets/images/assistance_program__aim_third_icon.png'

import WhyUsPersonCenter from '../../../assets/images/why_us__person_center.png'
import WhyUsPeopleRight from '../../../assets/images/why_us__people_right.png'

import TwitterLogo from '../../../assets/images/twitter_logo.png'
import LinkedinLogo from '../../../assets/images/linkedin_logo.png'
import MailLogo from '../../../assets/images/mail_logo.png'
import UBILogo from '../../../assets/images/ubi_logo.png'
import PeopleBottomIntroSection from '../../../assets/images/people_bottom__intro.png'
import EnglishFlag from '../../../assets/images/en_flag.png'
import SpanishFlag from '../../../assets/images/es_flag.png'

type NextImageRefactor = Omit<ImageProps, 'src'>

interface IComponentsMap {
  Logo: React.FC<NextImageRefactor>
  PeopleBottomIntroSection: React.FC<NextImageRefactor>
  PeopleCenterIntroSection: React.FC<NextImageRefactor>
  PersonTopIntroSection: React.FC<NextImageRefactor>
  Banner: React.FC<NextImageRefactor>
  GoldPolygon: React.FC<NextImageRefactor>
  BannerDescriptionItem1: React.FC<NextImageRefactor>
  BannerDescriptionItem2: React.FC<NextImageRefactor>
  BannerDescriptionItem3: React.FC<NextImageRefactor>
  PersonLeftAboutPOISection: React.FC<NextImageRefactor>
  PersonBottomAboutPOISection: React.FC<NextImageRefactor>
  AssistanceProgramMap: React.FC<NextImageRefactor>
  AssistanceProgramAimFirstIcon: React.FC<NextImageRefactor>
  AssistanceProgramAimSecondIcon: React.FC<NextImageRefactor>
  AssistanceProgramAimThirdIcon: React.FC<NextImageRefactor>
  WhyUsPersonCenter: React.FC<NextImageRefactor>
  WhyUsPeopleRight: React.FC<NextImageRefactor>
  TwitterLogo: React.FC<NextImageRefactor>
  LinkedinLogo: React.FC<NextImageRefactor>
  MailLogo: React.FC<NextImageRefactor>
  UBILogo: React.FC<NextImageRefactor>
  EnglishFlag: React.FC<NextImageRefactor>
  SpanishFlag: React.FC<NextImageRefactor>
}
export type IComponentKeys = keyof IComponentsMap

type IComponents = Record<IComponentKeys, React.FC<NextImageRefactor>>

const imagesToRender = [
  {
    name: 'Logo',
    source: Logo,
    alt: 'Logo',
  },
  {
    name: 'PeopleBottomIntroSection',
    source: PeopleBottomIntroSection,
    alt: 'People singed up in POI',
  },
  {
    name: 'PeopleCenterIntroSection',
    source: PeopleCenterIntroSection,
    alt: 'POI volunteers',
  },
  {
    name: 'PersonTopIntroSection',
    source: PersonTopIntroSection,
    alt: 'Person',
  },
  {
    name: 'Banner',
    source: Banner,
    alt: 'Banner',
  },
  {
    name: 'GoldPolygon',
    source: GoldPolygon,
    alt: 'GoldPolygon',
  },
  {
    name: 'BannerDescriptionItem1',
    source: BannerDescriptionItem1,
    alt: 'About POI - Description item 1',
  },
  {
    name: 'BannerDescriptionItem2',
    source: BannerDescriptionItem2,
    alt: 'Banner - Description item 2',
  },
  {
    name: 'BannerDescriptionItem3',
    source: BannerDescriptionItem3,
    alt: 'Banner - Description item 3',
  },
  {
    name: 'PersonLeftAboutPOISection',
    source: PersonLeftAboutPOISection,
    alt: 'About POI - Person Left',
  },
  {
    name: 'PersonBottomAboutPOISection',
    source: PersonBottomAboutPOISection,
    alt: 'About POI - Person Bottom',
  },
  {
    name: 'AssistanceProgramMap',
    source: AssistanceProgramMap,
    alt: "Assistance Program - CABA's map",
  },
  {
    name: 'AssistanceProgramAimFirstIcon',
    source: AssistanceProgramAimFirstIcon,
    alt: 'Assistance Program - Aim First Icon',
  },
  {
    name: 'AssistanceProgramAimSecondIcon',
    source: AssistanceProgramAimSecondIcon,
    alt: 'Assistance Program - Aim Second Icon',
  },
  {
    name: 'AssistanceProgramAimThirdIcon',
    source: AssistanceProgramAimThirdIcon,
    alt: 'Assistance Program - Aim Third Icon',
  },
  {
    name: 'WhyUsPersonCenter',
    source: WhyUsPersonCenter,
    alt: 'Why US - Person Center',
  },
  {
    name: 'WhyUsPeopleRight',
    source: WhyUsPeopleRight,
    alt: 'Why US - People Right',
  },
  {
    name: 'UBILogo',
    source: UBILogo,
    alt: 'UBI Logo',
  },
  {
    name: 'TwitterLogo',
    source: TwitterLogo,
    alt: 'Twitter Logo',
  },
  {
    name: 'LinkedinLogo',
    source: LinkedinLogo,
    alt: 'Linkedin Logo',
  },
  {
    name: 'MailLogo',
    source: MailLogo,
    alt: 'Mail Logo',
  },
  {
    name: 'SpanishFlag',
    source: SpanishFlag,
    alt: 'Spanish Logo',
  },
  {
    name: 'EnglishFlag',
    source: EnglishFlag,
    alt: 'English Logo',
  },
]

const Components: IComponents = (() => {
  const result = {} as any
  imagesToRender.forEach(({ name, source, alt }) => {
    result[name] = (props: ImageProps) => (
      <img {...props} src={source} alt={alt as string} />
    )
  })
  return result
})()

export default {
  ...Components,
} as IComponents
