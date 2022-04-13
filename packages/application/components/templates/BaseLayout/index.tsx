import { ReactNode } from 'react'
import { Heading, Text, VStack, View } from 'native-base'

import ConnectWalletButton from '../../molecules/ConnectWalletButton'
import MenuButton from '../../molecules/MenuButton'

export interface IBaseLayoutProps {
  children?: ReactNode
  title: string
  subTitle?: string
  withMenu?: boolean
  color?: string
  bg?: string
  withConnect?: boolean
}

const BaseLayout = ({
  title,
  subTitle,
  children,
  withMenu = false,
  withConnect = false,
  color,
  bg = "background.500"
}: IBaseLayoutProps) => (
  <VStack
    justifyContent="center"
    alignItems="center"
    w="100vw"
    h="100vh"
    bg={bg}
  >
    {withMenu && <MenuButton />}
    {withConnect && (
      <ConnectWalletButton
        containerProps={{
          right: { base: 'none', sm: 'none', md: 50 },
          top: { base: 5, sm: 5, md: 39 },
          position: 'absolute',
        }}
      />
    )}
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
