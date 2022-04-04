import { CloseIcon, HStack, IconButton, VStack, View } from 'native-base'
import { Images, NavigationTools, LanguageSelect } from '@components/atoms'

export interface IMobileMenuProps {
  onClosePress: () => void
}

const MobileMenu = ({ onClosePress }: IMobileMenuProps) => (
  <View w="100%" h="100vh" position="fixed" zIndex="1" bg="general.50">
    <VStack
      h="100vh"
      maxH="100vh"
      position="relative"
      alignItems="center"
      justifyContent="space-between"
    >
      <HStack justifyContent="flex-start" alignItems="center" w="100%">
        <IconButton icon={<CloseIcon size="5" />} onPress={onClosePress} />
        <View alignSelf="center">
          <Images.Logo width="70px" height="70px" />
        </View>
      </HStack>
      <NavigationTools onOperationPress={onClosePress} />
      <View height="50px" flex="2">
        <LanguageSelect />
      </View>
    </VStack>
  </View>
)

export default MobileMenu
