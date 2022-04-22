import { Divider, HStack, Text } from 'native-base'
import { useRouter } from 'next/router'
import POILogo from '../../atoms/Icons/Logo'
import LanguageSelect from '../../molecules/LanguageSelect'
import NavigationBarButton from '../../molecules/NavigationBarButton'
import ConnectWalletButton from '../../molecules/ConnectWalletButton'
import NavigationBarButtonMobile from '../../molecules/NavigationBarButtonMobile'
import {
  HomeIcon,
  DonateIcon,
  PublicAuditIcon,
  WalletIcon,
} from '../../atoms/Icons/Mobile'
import { useBreakpoint } from '../../../hooks/device'

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

const DesktopNavigationBar = ({ activeItem, onNavigate }: any) => (
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
      <Text fontSize="xl" bold>
        Proof Of Integrity
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
      <ConnectWalletButton />
      <Divider mx="20px" bg="#e1e1e1" orientation="vertical" height="30px" />
      <LanguageSelect />
    </HStack>
  </HStack>
)

const MobileNavigationBar = ({ activeItem, onNavigate }: any) => (
  <HStack
    w="100%"
    bg="white"
    position="absolute"
    bottom={0}
    borderTopColor="#EDB6A3"
    borderTopWidth="1px"
    px={4}
    justifyContent="space-evenly"
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
