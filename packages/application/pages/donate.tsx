import type { NextPage } from 'next'
import { BreakpointProvider } from '../components/context'
import BaseLayout from '../components/templates/BaseLayout'
import DonationForm from '../components/organisms/DonationForm'
import { t } from '../i18n'
import keys from '../i18n/keys'

const Donate: NextPage = () => (
  <BreakpointProvider>
    <BaseLayout
      activeItem={0}
      title={t(keys.header.title)}
      subTitle={t(keys.header.subtitle)}
      bg="#F2E4E3"
      color="black"
    >
      <DonationForm />
    </BaseLayout>
  </BreakpointProvider>
)

export default Donate
