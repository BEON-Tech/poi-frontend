
import { useTranslation } from 'next-export-i18n'
import { Text, Flex, View, HStack } from 'native-base'

import keys from '@i18n/keys'
import { PARTNERS_SECTION } from '@constants'

import { Images } from '@components/atoms'
import { Container } from '@components/templates'

const PartnersSection = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <View
        px={{ base: '20px', lg: '80px' }}
        mt={{ base: '50px', lg: '161px' }}
        nativeID={PARTNERS_SECTION}
      >
        <Flex
          py="27px"
          px="32px"
          borderWidth="1px"
          borderColor="general.100"
          borderRadius="20px"
          justifyContent="center"
          alignItems="center"
          flexDir={{ base: 'column', lg: 'row' }}
        >
          <HStack alignItems="center" mb={{ base: '24px', lg: 0 }}>
            <Images.PinkPolygon width="34px" height="34px" />
            <Text fontSize="xl" ml="38px" w={{ base: '100%', lg: '595px' }}>
              {t(keys.partnersSection.defyEducation)}
            </Text>
          </HStack>
          <Images.DefyEducationPartner width="221px" height="57px" />
        </Flex>
      </View>
    </Container>
  )
}

export default PartnersSection
