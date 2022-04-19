import { Button, Divider, HStack, Text } from 'native-base'
import POILogo from '../../atoms/Icons/Logo'
import LanguageSelect from '../../molecules/LanguageSelect'
import ConnectWalletButton from '../../molecules/ConnectWalletButton'

const DesktopNavigationBar = () => (
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
    <HStack space={4}>
      <Button>Donate</Button>
      <Button>Public Audit</Button>
    </HStack>
    <ConnectWalletButton />
    <Divider mx="20px" bg="general.200" orientation="vertical" height="30px" />
    <LanguageSelect />
  </HStack>
)

const NavigationBar = () => {
  //const { isDesktop } = useBreakpoint()
  const isDesktop = true
  return isDesktop ? (
    <DesktopNavigationBar />
  ) : (
    //<MobileToolbar />
    <DesktopNavigationBar />
  )
}

export default NavigationBar
