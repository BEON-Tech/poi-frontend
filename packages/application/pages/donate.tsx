import type { NextPage } from 'next'
import { useTranslation } from 'react-i18next'
import { HStack } from 'native-base'
import BaseLayout from '@components/templates/BaseLayout'
import {
  ConnectedWalletButtonMenu,
  DonationForm,
  CheckConnection,
} from '@components/organisms'
import { useWallet, useBreakpoint } from '@hooks'
import { keys } from '@i18n'

const Donate: NextPage = () => {
  const { t } = useTranslation()
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
          <ConnectedWalletButtonMenu width="300px" height="50px" borderRadius={25} />
        </HStack>
      ) : undefined}
      {isConnected ? <DonationForm /> : <CheckConnection />}
    </BaseLayout>
  )
}

export default Donate
