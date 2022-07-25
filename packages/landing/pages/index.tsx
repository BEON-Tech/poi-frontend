import { useState } from 'react'
import { Modal, VStack } from 'native-base'
import type { NextPage } from 'next'

import {
  IntroSection,
  BannerSection,
  AboutPOISection,
  AssistanceProgramSection,
  OurTeamSection,
  AdvisorsSection,
  PublicAuditSection,
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
    <VStack overflowY="hidden">
      {!isDesktop && showMenu && <MobileMenu onClosePress={onCloseMenu} />}
      <Toolbar onMenuPress={onShowMenu} />
      <Modal
        w="800px"
        h="800px"
        overlayVisible
        backdropVisible
        _backdrop={{ bg: 'black' }}
      >
        <Modal.Body>here</Modal.Body>
      </Modal>
      <IntroSection />
      <BannerSection />
      <AboutPOISection />
      <AssistanceProgramSection />
      <PublicAuditSection />
      <OurTeamSection />
      <AdvisorsSection />
      <PartnersSection />
      <ContactUsSection />
      <Footer />
    </VStack>
  )
}

export default Home
