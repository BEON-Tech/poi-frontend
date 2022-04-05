import { Flex, Heading, VStack, Button, View } from 'native-base'
import { Element } from 'react-scroll'

import { WHY_US_SECTION } from '@constants'
import { useTranslation } from 'next-export-i18n'
import keys from '@i18n/keys'
import { Images, ComingSoon } from '@components/atoms'
import { Container } from '@components/templates'

const PublicAuditSection = () => {
  const { t } = useTranslation()
  return (
    <Container>
      <Flex
        w="100%"
        pt={{ base: '100px', lg: '200px' }}
        px={{ base: '20px', lg: '80px' }}
        flexDirection={{ base: 'column', sm: 'row' }}
      >
        <Element name={WHY_US_SECTION} />
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
                w={{ base: '100%', lg: '313px' }}
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
          <View mt="54px" mr="50px" width="149px" height="149px">
            <Images.WhyUsPersonCenter width="100%" height="100%" />
          </View>
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
