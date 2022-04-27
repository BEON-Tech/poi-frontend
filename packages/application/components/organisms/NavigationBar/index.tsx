import { Divider, HStack, Text } from 'native-base'
import { useRouter } from 'next/router'
import POILogo from '../../atoms/Icons/Logo'
import LanguageSelect from '../../molecules/LanguageSelect'
import NavigationBarButton from '../../molecules/NavigationBarButton'
import ConnectWalletButton from '../../molecules/ConnectWalletButton'
import NavigationBarButtonMobile from '../../molecules/NavigationBarButtonMobile'
import ConnectedWalletButtonMenu from '../ConnectedWalletButtonMenu'
import {
  HomeIcon,
  DonateIcon,
  PublicAuditIcon,
  WalletIcon,
} from '../../atoms/Icons/Mobile'
import { useBreakpoint } from '../../../hooks/device'
import { useWallet } from '../../../hooks/wallet'
import { t } from '../../../i18n'
import keys from '../../../i18n/keys'

const desktopButtons = [
  { title: 'Donate', key: '/donate' },
  { title: 'Public Audit', key: '/publicAudit' },
]

const mobileButtons = [
  { title: 'Home', Icon: HomeIcon, key: '/' },
  { title: 'Donate', Icon: DonateIcon, key: '/donate' },
  { title: 'Public Audit', Icon: PublicAuditIcon, key: '/publicAudit' },
  { title: 'Wallet', Icon: WalletIcon, key: '/wallet' },
]

const DesktopNavigationBar = ({ activeItem, onNavigate }: any) => {
  const { isConnected } = useWallet()

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
      <HStack space={4}>
        <POILogo />
        <Text fontSize="xl" color="#172815" bold>
          {t(keys.main.poi)}
        </Text>
      </HStack>
      <HStack justifyContent="space-between" w="25%">
        {desktopButtons.map(({ key, ...props }) => (
          <NavigationBarButton
            {...props}
            key={key}
            isActive={activeItem === key}
            onPress={() => onNavigate(key)}
          />
        ))}
      </HStack>
      <HStack>
        {isConnected ? <ConnectedWalletButtonMenu width="240px" height="50px" borderRadius={25} /> : <ConnectWalletButton width="200px" height="50px" />}
        <Divider mx="20px" bg="#e1e1e1" orientation="vertical" height="30px" />
        <LanguageSelect />
      </HStack>
    </HStack>
  )
}

const MobileNavigationBar = ({ activeItem, onNavigate }: any) => (
  <>
    <HStack
      top={0}
      bg="white"
      w="100%"
      justifyContent="space-between"
      px={4}
      py={2}
    >
      <HStack space={4}>
        <POILogo size={10} />
        <Text fontSize="md" color="#172815" bold>
          {t(keys.main.poi)}
        </Text>
      </HStack>
      <LanguageSelect />
    </HStack>
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
      {mobileButtons.map(({ key, ...props }) => (
        <NavigationBarButtonMobile
          {...props}
          width="25%"
          key={key}
          isActive={activeItem === key}
          onPress={() => onNavigate(key)}
        />
      ))}
    </HStack>
  </>
)

const NavigationBar = () => {
  const router = useRouter()
  const { isDesktop } = useBreakpoint()
  const activeItem = router.pathname
  const onNavigate = (newRoute: string) => router.push(newRoute)
  return isDesktop ? (
    <DesktopNavigationBar activeItem={activeItem} onNavigate={onNavigate} />
  ) : (
    <MobileNavigationBar activeItem={activeItem} onNavigate={onNavigate} />
  )
}

export default NavigationBar
