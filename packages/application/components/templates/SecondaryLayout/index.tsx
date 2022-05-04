import { FC } from 'react'
import { VStack, Container } from 'native-base'

const SecondaryLayout: FC<any> = ({ children }) => (
  <VStack maxW="100vw" overflowX="hidden">
    <Container maxW="100vw" w="100%" overflowX="hidden" flex={4}>
      {children}
    </Container>
  </VStack>
)
export default SecondaryLayout
