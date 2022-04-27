import { ReactNode } from 'react'
import {
  VStack,
  Button,
  Container,
  useBreakpointValue,
  HStack,
  Divider,
  Stack,
} from 'native-base'

import ConnectWalletButton from '../../molecules/ConnectWalletButton'
// import MenuButton from '../../molecules/MenuButton'
import Logo from '../../molecules/Logo'

export interface IBaseLayoutProps {
  children?: ReactNode
  withMenu?: boolean
  withConnect?: boolean
  withLang?: boolean
  bgColor?: any
  display?: any
}

const BaseLayout = ({
  children,
  withMenu = false,
  withConnect = false,
  withLang = false,
  bgColor,
  display = 'flex',
}: IBaseLayoutProps) => {
  const d = useBreakpointValue({
    base: 'none',
    lg: 'flex',
  })

  return (
    <VStack maxW="100vw" overflowX="hidden">
      <Stack
        display={display}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        w="100%"
        px={{ base: '2', lg: '10' }}
        py="3"
        flexWrap="nowrap"
        position="absolute"
        top="0"
        zIndex="99"
        bgColor={bgColor}
      >
        <HStack
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          space={40}
        >
          <Logo>Proof of Humanity</Logo>
          <Button variant="link" display={d}>
            Donate
          </Button>
          <Button variant="link" display={d}>
            Public Audit
          </Button>
        </HStack>
        <HStack
          display={d}
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          space={5}
        >
          {withConnect && <ConnectWalletButton width="200px" height="50px" />}
          {withConnect && withLang && (
            <Divider h="10" mx="2" orientation="vertical" />
          )}
          {withLang && <Button>En</Button>}
        </HStack>
      </Stack>
      {withMenu /* && <MenuButton /> */}

      <Container maxW="100vw" w="100%" overflowX="hidden" flex={4}>
        {children}
      </Container>
    </VStack>
  )
}
export default BaseLayout