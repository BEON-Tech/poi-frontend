import { HStack, Heading, VStack, Button, View } from 'native-base'
import { Element } from 'react-scroll'

import { WHY_US_SECTION } from '@constants'
import { useTranslation } from 'next-export-i18n'
import keys from '@i18n/keys'
import { Images } from '@components/atoms'

const PublicAuditSection = () => {
  const { t } = useTranslation()
  return (
    <HStack pl="130px" pt="200px" pb="134px" pr="80px">
      <Element name={WHY_US_SECTION} />
      <VStack mt="30px" flex="1">
        <Heading w="480px" size="2xl" fontWeight="normal" lineHeight="70px">
          {t(keys.whyUS.title)}
        </Heading>
        <Button mt="60px" w="313px" variant="outline">
          {t(keys.whyUS.button)}
        </Button>
      </VStack>
      <HStack flex="1" justifyContent="flex-end">
        <View mt="54px" mr="50px">
          <Images.WhyUsPersonCenter width="149px" height="149px" />
        </View>
        <Images.WhyUsPeopleRight width="324px" height="324px" />
      </HStack>
    </HStack>
  )
}

export default PublicAuditSection
