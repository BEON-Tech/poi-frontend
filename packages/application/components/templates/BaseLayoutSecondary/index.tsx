import { ReactNode } from 'react'
import { VStack, Container } from 'native-base'



export interface IBaseLayoutProps {
  children?: ReactNode
}

const BaseLayout = ({
  children,
}: IBaseLayoutProps) => (
  <VStack maxW="100vw" overflowX="hidden">
    <Container maxW="100vw" w="100%" overflowX="hidden" flex={4}>
      {children}
    </Container>
  </VStack>
)
export default BaseLayout
