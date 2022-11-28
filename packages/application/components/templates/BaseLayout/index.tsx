import { ReactNode } from 'react'
import { Text, VStack, View } from 'native-base'
import { NavigationBar } from '@components/organisms'

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
  >
    <NavigationBar />
    <Text
      maxW="90%"
      textAlign="center"
      color={color}
      fontSize={{
        base: '3xl',
        sm: '6xl',
        lg: '6xl',
        xl: '6xl',
      }}
      bold
      mt={{
        base: 6,
        sm: 6,
        lg: 6,
        xl: 20,
      }}
    >
      {title}
    </Text>
    <Text
      maxW="80%"
      textAlign="center"
      color="text.900"
      fontSize={{
        base: 'md',
        sm: '2xl',
        lg: 'xl',
        xl: 'xl',
      }}
      lineHeight={32}
      mt={{
        base: 2,
        sm: 2,
        lg: 2,
        xl: 0,
      }}
    >
      {subTitle}
    </Text>
    <View
      overflowY="auto"
      flex={4}
      w={620}
      px={{
        base: 0,
        sm: 0,
        lg: 10,
        xl: 10,
      }}
      maxW="90%"
    >
      {children}
    </View>
  </VStack>
)

export default BaseLayout
