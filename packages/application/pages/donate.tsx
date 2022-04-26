import type { NextPage } from 'next'
import { HStack } from 'native-base'
import BaseLayout from '../components/templates/BaseLayout'
import DonationForm from '../components/organisms/DonationForm'
import CheckConnection from '../components/organisms/DonationForm/CheckConnection'
import ConnectedWalletButtonMenu from '../components/organisms/ConnectedWalletButtonMenu'
import { useBreakpoint } from '../hooks/device'
import { useWallet } from '../hooks/wallet'
import { t } from '../i18n'
import keys from '../i18n/keys'

const Donate: NextPage = () => {
  const { isDesktop } = useBreakpoint()
  const { isConnected } = useWallet()
  return (
    <BaseLayout
      title={t(keys.donateHeader.title)}
      subTitle={t(keys.donateHeader.subtitle)}
      bg="#F2E4E3"
      color="black"
    >
      {!isDesktop && isConnected ? (
        <HStack
          mt={{
            base: 10,
            sm: 10,
            lg: 10,
            xl: 20,
          }}
        >
          <ConnectedWalletButtonMenu
            width="300px"
            height="50px"
            borderRadius={25}
          />
        </HStack>
      ) : undefined}
      {isConnected ? <DonationForm /> : <CheckConnection />}
    </BaseLayout>
  )
}

export default Donate
