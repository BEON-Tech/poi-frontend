import { VStack, HStack, Text, View, IconButton } from 'native-base'
import { useTranslation } from 'react-i18next'
import { keys } from '@i18n'

import { Container } from '@components/templates'
import { LinkedInIcon, MailIcon, POILogo, TwitterIcon } from '@components/atoms'
import { useBreakpoint } from '@hooks'

const socialButtons = [
  {
    name: 'twitter',
    Icon: () => <TwitterIcon width="23.83px" height="19.44px" />,
    onPress: () => window.open('https://twitter.com/proof_integrity', '_blank'),
  },
  {
    name: 'linkedin',
    Icon: () => <LinkedInIcon width="25px" height="26px" />,
    onPress: () =>
      window.open(
        'https://www.linkedin.com/company/proof-of-integrity/',
        '_blank'
      ),
    ml: '46px',
  },
  {
    name: 'mail',
    Icon: () => <MailIcon width="26px" height="26px" />,
    onPress: () => {
      window.location.href = `mailto:info@proofofintegrity.org`
    },
    ml: '46px',
  },
]

const Footer = () => {
  const { isDesktop } = useBreakpoint()
  const { t } = useTranslation()

  return (
    <View bg="background.100" w="100%">
      <Container>
        <HStack
          bg="background.100"
          px="80px"
          pt="40px"
          pb="51px"
          mb={{ base: 32, lg: 0 }}
          w="100%"
        >
          <VStack flex="1" display="flex" alignItems="flex-start">
            <View width="84px" height="84px">
              <POILogo />
            </View>
            <Text mt="18px" fontSize="lg" fontWeight="bold">
              {t(keys.footer.title)}
            </Text>
            <Text mt="11px" fontSize="xs" color="general.400" opacity="50%">
              {t(keys.footer.subtitle)}
            </Text>
            <HStack mt="50px">
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
            <HStack flex="1" h="100%" alignSelf="flex-end">
              <Text
                fontSize="xs"
                color="general.400"
                opacity="50%"
                w="100%"
                textAlign="right"
              >
                {t(keys.footer.disclaimer)}
              </Text>
            </HStack>
          )}
        </HStack>
      </Container>
    </View>
  )
}

export default Footer
