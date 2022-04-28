import { ReactNode } from 'react'
import { VStack, Container } from 'native-base'

import { NavigationBar } from '@components/organisms'

export interface IBaseLayoutProps {
  children?: ReactNode
  bgColor?: any
  display?: any
}

const BaseLayout = ({
  children,
  bgColor,
  display = 'flex',
}: IBaseLayoutProps) => (
  <VStack maxW="100vw" overflowX="hidden">
    <VStack
      display={display}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      w="100%"
      flexWrap="nowrap"
      position="absolute"
      top="0"
      zIndex="1"
      bgColor={bgColor}
    >
      <NavigationBar />
    </VStack>
    <Container maxW="100vw" w="100%" overflowX="hidden" flex={4}>
      {children}
    </Container>
  </VStack>
)
export default BaseLayout
