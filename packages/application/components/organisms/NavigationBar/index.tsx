import { Divider, HStack, Text, Pressable } from 'native-base'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { ConnectWalletMenu } from '@components/organisms'
import {
  ConnectWalletButton,
  LanguageSelect,
  NavigationBarButton,
  NavigationBarButtonMobile,
} from '@components/molecules'
import {
  POILogo,
  HomeIcon,
  DonateIcon,
  PublicAuditIcon,
  WalletIcon,
} from '@components/atoms/Icons'
import { useWallet, useBreakpoint } from '@hooks'
import { keys } from '@i18n'
import { redirectToHome } from '@services/urls'

interface INavigationBarProps {
  hideBottomBar?: boolean
}

const DesktopNavigationBar = ({ activeItem, onNavigate }: any) => {
  const { t } = useTranslation()
  const { isConnected } = useWallet()
  const desktopButtons = [
    { title: t(keys.navigatonBar.donate), key: '/donate', enabled: true },
    {
      title: t(keys.navigatonBar.publicAudit),
      key: '/publicAudit',
      enabled: false,
    },
  ]
  return (
    <HStack
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      maxH="50px"
      pt="34px"
      pr="34px"
      pl="80px"
      mt="20px"
      mb="50px"
    >
      <Pressable onPress={redirectToHome}>
        <HStack space={4}>
          <POILogo size="63px" />
          <Text fontSize="xl" color="greenColor.600" bold>
            {t(keys.main.poi)}
          </Text>
        </HStack>
      </Pressable>
      <HStack justifyContent="space-between" w="25%">
        {desktopButtons.map(({ key, enabled, ...props }) => (
          <NavigationBarButton
            {...props}
            key={key}
            isActive={activeItem === key}
            isDisabled={!enabled}
            onPress={() => onNavigate(key)}
          />
        ))}
      </HStack>
      <HStack>
        {isConnected ? (
          <ConnectWalletMenu width="240px" height="50px" borderRadius={25} />
        ) : (
          <ConnectWalletButton width="200px" height="50px" />
        )}
        <Divider mx="20px" bg="#e1e1e1" orientation="vertical" height="30px" />
        <LanguageSelect />
      </HStack>
    </HStack>
  )
}

const MobileNavigationBar = ({
  activeItem,
  onNavigate,
  hideBottomBar,
}: any) => {
  const { t } = useTranslation()
  const mobileButtons = [
    {
      title: t(keys.navigatonBar.home),
      Icon: HomeIcon,
      key: 'home',
      enabled: true,
    },
    {
      title: t(keys.navigatonBar.donate),
      Icon: DonateIcon,
      key: '/donate',
      enabled: true,
    },
    {
      title: t(keys.navigatonBar.publicAudit),
      Icon: PublicAuditIcon,
      key: '/publicAudit',
      enabled: false,
    },
    {
      title: t(keys.navigatonBar.wallet),
      Icon: WalletIcon,
      key: '/wallet',
      enabled: false,
    },
  ]
  return (
    <>
      <HStack
        top={0}
        bg="white"
        w="100%"
        justifyContent="space-between"
        px={4}
        py={2}
      >
        <Pressable onPress={redirectToHome}>
          <HStack space={4}>
            <POILogo size={10} />
            <Text fontSize="md" color="greenColor.600" bold>
              {t(keys.main.poi)}
            </Text>
          </HStack>
        </Pressable>
        <LanguageSelect />
      </HStack>
      {!hideBottomBar && (
        <HStack
          w="100%"
          bg="white"
          position="absolute"
          bottom={0}
          borderTopColor="#EDB6A3"
          borderTopWidth="1px"
          px={4}
          zIndex={1}
        >
          {mobileButtons.map(({ key, enabled, ...props }) => (
            <NavigationBarButtonMobile
              {...props}
              width="25%"
              key={key}
              isActive={activeItem === key}
              isDisabled={!enabled}
              onPress={() => onNavigate(key)}
            />
          ))}
        </HStack>
      )}
    </>
  )
}

const NavigationBar = ({ hideBottomBar = false }: INavigationBarProps) => {
  const router = useRouter()
  const { isDesktop } = useBreakpoint()
  const activeItem = router.pathname
  const onNavigate = (newRoute: string) => {
    if (newRoute !== 'home') {
      router.push(newRoute)
    } else {
      redirectToHome()
    }
  }
  return isDesktop ? (
    <DesktopNavigationBar activeItem={activeItem} onNavigate={onNavigate} />
  ) : (
    <MobileNavigationBar
      activeItem={activeItem}
      onNavigate={onNavigate}
      hideBottomBar={hideBottomBar}
    />
  )
}

export default NavigationBar
