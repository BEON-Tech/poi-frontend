import type { NextPage } from 'next'
import BaseLayout from '../components/templates/BaseLayout'
import DonationForm from '../components/organisms/DonationForm'
import CheckConnection from '../components/organisms/DonationForm/CheckConnection'
import { useWallet } from '../hooks/wallet'
import { t } from '../i18n'
import keys from '../i18n/keys'

  const { active } = useWallet()

  return (<BaseLayout
      activeItem={0}
      title={t(keys.header.title)}
      subTitle={t(keys.header.subtitle)}
      bg="#F2E4E3"
      color="black"
    >
      {active
        ? <DonationForm />
        : <CheckConnection />}
    </BaseLayout>
  )
}

export default Donate
