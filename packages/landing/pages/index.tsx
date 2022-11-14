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
  PartnersSection,
  ContactUsSection,
  MobileMenu,
  DonateETHColombiaPopup,
} from '@components/organisms'
import { useBreakpoint } from '@hooks'
import { Toolbar, Footer } from '@components/molecules'

const Home: NextPage = () => {
  const { isDesktop } = useBreakpoint()
  const [showPopup, setShowPopup] = useState(true)
  const [showMenu, setShowMenu] = useState(false)

  const onShowMenu = () => setShowMenu(true)
  const onCloseMenu = () => setShowMenu(false)
  const onClosePopup = () => setShowPopup(false)

  return (
    <VStack overflowY="hidden">
      {!isDesktop && showMenu && <MobileMenu onClosePress={onCloseMenu} />}
      <Toolbar onMenuPress={onShowMenu} />
      <Modal
        defaultIsOpen
        isOpen={showPopup}
        overlayVisible
        backdropVisible
        closeOnOverlayClick={false}
        isKeyboardDismissable={false}
        _backdrop={{ bg: 'black' }}
        height="100%"
        justifyContent="flex-start"
      >
        <Modal.Content
          maxWidth="unset"
          width={1024}
          background="transparent"
          top="200px"
          position="sticky"
        >
          <DonateETHColombiaPopup onClosePopup={onClosePopup} />
        </Modal.Content>
      </Modal>
      <IntroSection />
      <BannerSection />
      <AboutPOISection />
      <AssistanceProgramSection />
      <OurTeamSection />
      <AdvisorsSection />
      <PartnersSection />
      <ContactUsSection />
      <Footer />
    </VStack>
  )
}

export default Home
