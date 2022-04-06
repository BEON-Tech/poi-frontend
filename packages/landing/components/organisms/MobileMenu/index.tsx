import { CloseIcon, HStack, IconButton, VStack, View } from 'native-base'
import { Images, NavigationTools, LanguageSelect } from '@components/atoms'

export interface IMobileMenuProps {
  onClosePress: () => void
}

const MobileMenu = ({ onClosePress }: IMobileMenuProps) => (
  <View w="100%" h="100vh" position="fixed" zIndex="1" bg="general.50">
    <VStack
      h="100vh"
      position="relative"
      alignItems="center"
      justifyContent="space-between"
      pb="20px"
    >
      <HStack justifyContent="center" alignItems="center" w="100%">
        <IconButton
          left="15px"
          position="absolute"
          icon={<CloseIcon size="5" />}
          onPress={onClosePress}
        />
        <View alignSelf="center">
          <Images.Logo width="70px" height="70px" />
        </View>
      </HStack>
      <VStack
        w="100%"
        h="85%"
        alignItems="center"
        justifyContent="space-between"
        pb="80px"
        pt="40px"
      >
        <NavigationTools onOperationPress={onClosePress} />
      </VStack>
      <View height="50px">
        <LanguageSelect />
      </View>
    </VStack>
  </View>
)

export default MobileMenu
