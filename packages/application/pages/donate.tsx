import type { NextPage } from 'next'
import BaseLayout from '../components/templates/BaseLayout'
import DonationForm from '../components/organisms/DonationForm'
import CheckConnection from '../components/organisms/DonationForm/CheckConnection'
import { useWallet } from '../hooks/wallet'
import { t } from '../i18n'
import keys from '../i18n/keys'

const Donate: NextPage = () => {
  const { active } = useWallet()
  return (
    <BaseLayout
      title={t(keys.donateHeader.title)}
      subTitle={t(keys.donateHeader.subtitle)}
      bg="#F2E4E3"
      color="black"
    >
      {active ? <DonationForm /> : <CheckConnection />}
    </BaseLayout>
  )
}

export default Donate
