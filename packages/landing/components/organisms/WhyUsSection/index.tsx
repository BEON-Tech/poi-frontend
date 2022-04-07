import { Flex, Heading, VStack, Button, View } from 'native-base'


import keys from '@i18n/keys'
import { useBreakpoint } from '@hooks'
import { WHY_US_SECTION } from '@constants'
import { Container } from '@components/templates'
import { useTranslation } from 'next-export-i18n'
import { Images, ComingSoon } from '@components/atoms'

const PublicAuditSection = () => {
  const { isTablet } = useBreakpoint()
  const { t } = useTranslation()
  return (
    <Container>
      <Flex
        w="100%"
        pt={{ base: '100px', lg: '200px' }}
        px={{ base: '20px', lg: '80px' }}
        flexDirection={{ base: 'column', sm: 'row' }}
        nativeID={WHY_US_SECTION}
      >
        <VStack mt="30px" flex="1" w={{ base: '100%', lg: '480px' }}>
          <Flex flexDirection={{ base: 'column', sm: 'row' }}>
            <Images.Polygon width="55.23px" height="55.23px" />
            <Heading
              size="2xl"
              fontWeight="normal"
              lineHeight="70px"
              ml={{ base: 0, lg: '23px' }}
              w={{ base: '100%', lg: '492px' }}
            >
              {t(keys.whyUS.title)}
            </Heading>
          </Flex>
          <ComingSoon
            Component={(props) => (
              <Button
                mt="60px"
                maxW={{ base: '250px', lg: '350px' }}
                w={{ base: '100%', lg: '350px' }}
                variant="outline"
                {...props}
              >
                {t(keys.whyUS.button)}
              </Button>
            )}
          />
        </VStack>
        <Flex
          flex="1"
          justifyContent="flex-end"
          flexDirection={{ base: 'column', sm: 'row' }}
        >
          {!isTablet && (
            <View
              mt={{ base: '40px', lg: '-40px' }}
              mr="10px"
              width="149px"
              height="149px"
            >
              <Images.WhyUsPersonCenter width="100%" height="100%" />
            </View>
          )}
          <View
            mt={{ base: '-23px', lg: 0 }}
            alignSelf="flex-end"
            width={{ base: '252px', lg: '324px' }}
            height={{ base: '252px', lg: '324px' }}
          >
            <Images.WhyUsPeopleRight width="100%" height="100%" />
          </View>
        </Flex>
      </Flex>
    </Container>
  )
}

export default PublicAuditSection
