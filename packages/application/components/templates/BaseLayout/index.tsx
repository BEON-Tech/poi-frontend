import { ReactNode } from 'react'
import { Heading, Text, VStack, View } from 'native-base'
import NavigationBar from '../../organisms/NavigationBar'

export interface IBaseLayoutProps {
  children?: ReactNode
  title: string
  subTitle?: string
  color?: string
  bg?: string
}

const BaseLayout = ({
  title,
  subTitle,
  children,
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
    <Heading mt={20} color={color} maxW={750}>
      {title}
    </Heading>
    {subTitle && (
      <Text
        textAlign="center"
        maxW={700}
        color="text.900"
        fontSize="lg"
        lineHeight={31}
        mt={22}
        flex={{ base: 0.25, sm: 0 }}
      >
        {subTitle}
      </Text>
    )}
    <View overflowY="hidden" flex={4}>
      {children}
    </View>
  </VStack>
)

export default BaseLayout
