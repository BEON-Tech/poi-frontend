import { ReactNode } from 'react'
import { Text, VStack, View } from 'native-base'
import NavigationBar from '../../organisms/NavigationBar'

export interface IBaseLayoutProps {
  children?: ReactNode
  title: string
  subTitle?: string
  color?: string
  bg?: string
}

const BaseLayout = ({
  children,
  title,
  subTitle,
  color,
  bg = 'background.500',
}: IBaseLayoutProps) => (
  <VStack
    justifyContent="center"
    alignItems="center"
    w="100vw"
    h="100vh"
    bg={bg}
    position="fixed"
  >
    <NavigationBar />
    <Text fontSize="6xl" bold mt={20} color={color} maxW={750}>
      {title}
    </Text>
    <Text
      textAlign="center"
      maxW={700}
      color="text.900"
      fontSize="xl"
      lineHeight={31}
      mt={4}
      flex={{ base: 0.25, sm: 0 }}
    >
      {subTitle}
    </Text>
    <View overflowY="hidden" flex={4}>
      {children}
    </View>
  </VStack>
)

export default BaseLayout
