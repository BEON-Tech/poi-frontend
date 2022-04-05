import { useState } from 'react'
import { VStack } from 'native-base'
import type { NextPage } from 'next'

import {
  IntroSection,
  BannerSection,
  AboutPOISection,
  AssistanceProgramSection,
  OurTeamSection,
  AdvisorsSection,
  PublicAuditSection,
  WhyUsSection,
  PartnersSection,
  ContactUsSection,
  MobileMenu,
} from '@components/organisms'
import { useBreakpoint } from '@hooks'
import { Toolbar, Footer } from '@components/molecules'

const Home: NextPage = () => {
  const { isDesktop } = useBreakpoint()
  const [showMenu, setShowMenu] = useState(false)
  const onShowMenu = () => setShowMenu(true)
  const onCloseMenu = () => setShowMenu(false)
  return (
    <VStack w="100%" overflowY="hidden">
      {!isDesktop && showMenu && <MobileMenu onClosePress={onCloseMenu} />}

      <Toolbar onMenuPress={onShowMenu} />
      <IntroSection />
      <BannerSection />
      <AboutPOISection />
      <AssistanceProgramSection />
      <PublicAuditSection />
      <OurTeamSection />
      <AdvisorsSection />
      <PartnersSection />
      <WhyUsSection />
      <ContactUsSection />
      <Footer />
    </VStack>
  )
}

export default Home
