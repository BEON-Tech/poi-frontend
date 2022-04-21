import { Divider, HStack, Text } from 'native-base'
import POILogo from '../../atoms/Icons/Logo'
import LanguageSelect from '../../molecules/LanguageSelect'
import NavigationBarButton from '../../molecules/NavigationBarButton'
import ConnectWalletButton from '../../molecules/ConnectWalletButton'
import { useBreakpoint } from '../../../hooks/device'

const DesktopNavigationBar = ({ activeItem }: any) => (
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
      <NavigationBarButton title="Donate" isActive={activeItem === 0} />
      <NavigationBarButton title="Public Audit" isActive={activeItem === 1} />
    </HStack>
    <HStack>
      <ConnectWalletButton />
      <Divider mx="20px" bg="#e1e1e1" orientation="vertical" height="30px" />
      <LanguageSelect />
    </HStack>
  </HStack>
)

const MobileToolbar = (/* { activeItem }: any */) => <Text>To Do</Text>

const NavigationBar = ({ activeItem }: any) => {
  const { isDesktop } = useBreakpoint()
  console.log("IS DESKTOP: ", isDesktop)
  return isDesktop ? (
    <DesktopNavigationBar activeItem={activeItem} />
  ) : (
    <MobileToolbar />
  )
}

export default NavigationBar
