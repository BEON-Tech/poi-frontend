import { Divider, HStack, IconButton, Text } from 'native-base'

import { Images, NavigationTools, LanguageSelect } from '@components/atoms'
import { useBreakpoint } from '@hooks'
import { useTranslation } from 'next-export-i18n'
import keys from '@i18n/keys'

export interface IToolbarProps {
  onMenuPress: () => void
}

const size = '26px'

const DesktopToolbar = () => (
  <HStack
    w="100%"
    justifyContent=""
    alignItems="center"
    maxH="50px"
    pt="34px"
    pr="4"
    pl="80px"
    mb="50px"
  >
    <Images.Logo width="84px" height="84px" />
    <HStack
      pl="30px"
      flexGrow="1"
      justifyContent="space-between"
      alignItems="center"
    >
      <NavigationTools />
    </HStack>
    <Divider mx="20px" bg="general.200" orientation="vertical" height="30px" />
    <LanguageSelect />
  </HStack>
)

const MobileToolbar = ({ onMenuPress }: IToolbarProps) => {
  const { t } = useTranslation()
  return (
    <HStack
      position="relative"
      alignItems="center"
      justifyContent="center"
      bg="rgba(242, 228, 227, 0.9)"
      h="70px"
    >
      <IconButton
        onPress={onMenuPress}
        position="absolute"
        left="20px"
        icon={<Images.Hamburguer width="22px" height="20px" />}
      />

      <HStack
        ml={`-${size}`}
        justifyContent="center"
        alignItems="center"
        borderRadius="50px"
        bg="general.50"
        h={size}
        w={size}
      >
        <Images.Logo width="24px" height="24px" />
      </HStack>
      <Text ml="8px">{t(keys.toolbar.title)}</Text>
    </HStack>
  )
}

const Toolbar = ({ onMenuPress }: IToolbarProps) => {
  const { isDesktop } = useBreakpoint()
  return isDesktop ? (
    <DesktopToolbar />
  ) : (
    <MobileToolbar onMenuPress={onMenuPress} />
  )
}

export default Toolbar
