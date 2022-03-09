import { VStack } from 'native-base'
import type { NextPage } from 'next'
import { useState } from 'react'

import {
  IntroSection,
  BannerSection,
  AboutPOISection,
  AssistanceProgramSection,
  OurTeamSection,
  AdvisorsSection,
  PublicAuditSection,
  WhyUsSection,
} from '@components/organisms'
import { Toolbar, Footer } from '@components/molecules'

const Home: NextPage = () => {
  const [showAdvisors, setShowAdvisors] = useState(false)

  const showAdvisorsHandler = () => setShowAdvisors(true)
  const hideAdvisorsHandler = () => setShowAdvisors(false)

  return (
    <VStack>
      <Toolbar />
      <IntroSection />
      <BannerSection />
      <AboutPOISection />
      <AssistanceProgramSection />
      <OurTeamSection
        advisorsShown={showAdvisors}
        onShowAdvisors={showAdvisorsHandler}
      />
      {showAdvisors && <AdvisorsSection onHideAdvisors={hideAdvisorsHandler} />}
      <PublicAuditSection />
      <WhyUsSection />
      <Footer />
    </VStack>
  )
}

export default Home
