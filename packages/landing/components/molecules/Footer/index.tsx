import { VStack, HStack, Text, View, IconButton } from 'native-base'
import { useTranslation } from 'next-export-i18n'
import keys from '@i18n/keys'

import { Images, NavigationTools } from '@components/atoms'
import { Container } from '@components/templates'
import { useBreakpoint } from '@hooks'

const socialButtons = [
  {
    name: 'twitter',
    Icon: () => <Images.TwitterLogo width="23.83px" height="19.44px" />,
    onPress: () => window.open('https://twitter.com/poi_app', '_blank'),
  },
  {
    name: 'linkedin',
    Icon: () => <Images.LinkedinLogo width="25px" height="26px" />,
    onPress: () => window.open('https://twitter.com/poi_app', '_blank'),
    ml: '46px',
  },
  {
    name: 'mail',
    Icon: () => <Images.MailLogo width="26px" height="26px" />,
    onPress: () => window.open('https://twitter.com/poi_app', '_blank'),
    ml: '46px',
  },
]

const Toolbar = () => {
  const { isDesktop } = useBreakpoint()
  const { t } = useTranslation()

  return (
    <View bg="general.100" w="100%">
      <Container>
        <HStack bg="general.100" px="80px" pt="40px" pb="51px" w="100%">
          <VStack flex="1">
            <View width="84px" height="84px">
              <Images.Logo width="84px" height="84px" />
            </View>
            <Text mt="18px" fontWeight="bold">
              {t(keys.footer.title)}
            </Text>
            <Text mt="11px" fontSize="xs" color="general.400" opacity="50%">
              {t(keys.footer.subtitle)}
            </Text>
            <HStack mt="52px">
              {socialButtons.map(
                ({ name, Icon, onPress: onIconPress, ...props }) => (
                  <IconButton
                    {...props}
                    key={name}
                    p="0"
                    m="0"
                    onPress={onIconPress}
                    icon={<Icon />}
                  />
                )
              )}
            </HStack>
          </VStack>
          {isDesktop && (
            <VStack flex="3" h="100%">
              <HStack
                justifyContent="space-between"
                alignItems="center"
                mt="34px"
                maxH="50px"
                w="100%"
                pr="50px"
              >
                <NavigationTools />
              </HStack>
              <View justifySelf="flex-end" alignSelf="flex-end" mt="140px">
                <Text fontSize="xs" color="general.400" opacity="50%">
                  {t(keys.footer.disclaimer)}
                </Text>
              </View>
            </VStack>
          )}
        </HStack>
      </Container>
    </View>
  )
}

export default Toolbar
