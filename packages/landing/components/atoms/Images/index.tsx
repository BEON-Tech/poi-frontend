import React from 'react'
import { ImageProps } from 'next/image'

import PersonTopIntroSection from '../../../assets/images/person_top__intro.png'
import PersonLeftAboutPOISection from '../../../assets/images/about_poi__left.png'
import PeopleCenterIntroSection from '../../../assets/images/people_center__intro.png'
import PersonBottomAboutPOISection from '../../../assets/images/about_poi__bottom.png'
import Banner from '../../../assets/images/banner.png'
import Logo from '../../../assets/images/logo.png'
import AssistanceProgramMap from '../../../assets/images/assistance_program__map.png'
import AssistanceProgramAimFirstIcon from '../../../assets/images/assistance_program__aim_first_icon.png'
import AssistanceProgramAimSecondIcon from '../../../assets/images/assistance_program__aim_second_icon.png'
import AssistanceProgramAimThirdIcon from '../../../assets/images/assistance_program__aim_third_icon.png'
import WhyUsPersonCenter from '../../../assets/images/why_us__person_center.png'
import WhyUsPeopleRight from '../../../assets/images/why_us__people_right.png'
import TwitterLogo from '../../../assets/images/twitter_logo.png'
import LinkedinLogo from '../../../assets/images/linkedin_logo.png'
import MailLogo from '../../../assets/images/mail_logo.png'
import MailLogoGreen from '../../../assets/images/mail_logo_green.png'
import UBILogo from '../../../assets/images/ubi_logo.png'
import PeopleBottomIntroSection from '../../../assets/images/people_bottom__intro.png'
import EnglishFlag from '../../../assets/images/en_flag.png'
import SpanishFlag from '../../../assets/images/es_flag.png'
import Polygon from '../../../assets/images/polygon.png'
import PinkPolygon from '../../../assets/images/pink__polygon.png'
import Pentagon from '../../../assets/images/pentagon.png'
import DefyEducationPartner from '../../../assets/images/partners__defy_education.png'
import ContactUsLeftImage from '../../../assets/images/contact_us__left_image.png'
import Hamburguer from '../../../assets/images/hamburguer.png'

type NextImageRefactor = Omit<ImageProps, 'src'>

interface IComponentsMap {
  Logo: React.FC<NextImageRefactor>
  Polygon: React.FC<NextImageRefactor>
  PinkPolygon: React.FC<NextImageRefactor>
  Pentagon: React.FC<NextImageRefactor>
  PeopleBottomIntroSection: React.FC<NextImageRefactor>
  PeopleCenterIntroSection: React.FC<NextImageRefactor>
  PersonTopIntroSection: React.FC<NextImageRefactor>
  Banner: React.FC<NextImageRefactor>
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
  DefyEducationPartner: React.FC<NextImageRefactor>
  MailLogoGreen: React.FC<NextImageRefactor>
  ContactUsLeftImage: React.FC<NextImageRefactor>
  Hamburguer: React.FC<NextImageRefactor>
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
    name: 'Polygon',
    source: Polygon,
    alt: 'Polygon',
  },
  {
    name: 'PinkPolygon',
    source: PinkPolygon,
    alt: 'Pink Polygon',
  },
  {
    name: 'Pentagon',
    source: Pentagon,
    alt: 'Pentagon gold',
  },
  {
    name: 'DefyEducationPartner',
    source: DefyEducationPartner,
    alt: 'DefyEducationPartner log',
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
    name: 'MailLogoGreen',
    source: MailLogoGreen,
    alt: 'Mail Logo green',
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
  {
    name: 'ContactUsLeftImage',
    source: ContactUsLeftImage,
    alt: 'ContactUs Left',
  },
  {
    name: 'Hamburguer',
    source: Hamburguer,
    alt: 'Hamburguer',
  },
]

const [Components, Sources]: [IComponents, any] = (() => {
  const result = {} as any
  const sources = {} as any
  imagesToRender.forEach(({ name, source, alt }) => {
    result[name] = (props: any) => (
      <img {...props as any} src={source} alt={alt as string} />
    )
    sources[name] = source
  })
  return [result, sources]
})()

export const ImageSources = Sources as Record<keyof IComponentsMap, string>

export default {
  ...Components,
} as IComponents
