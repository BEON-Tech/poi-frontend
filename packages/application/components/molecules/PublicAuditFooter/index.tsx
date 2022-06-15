import { useRouter } from 'next/router'
import { Box, Button, Stack, Text, VStack } from 'native-base'
import { useTranslation } from 'react-i18next'
import { keys } from '@i18n'
import { CornerPublicAudit } from '@components/atoms'
import { MAX_WIDTH } from '@constants'

const PublicAuditFooter = () => {
  const { t } = useTranslation()
  const router = useRouter()

  const goToDonate = () => {
    router.push('/donate')
  }

  return (
    <VStack w="full" mb={{ base: 20, lg: 0 }}>
      <Box
        top="0"
        left="0"
        zIndex="-1"
        position="absolute"
        w={{ base: '50px', lg: '80px' }}
        h={{ base: '450px', lg: '308px' }}
      >
        <CornerPublicAudit position="bottom1" />
      </Box>
      <Box
        bottom="0"
        left="0"
        zIndex="-1"
        position="absolute"
        w={{ base: '138px', lg: '206px' }}
        h={{ base: '94px', lg: '112px' }}
      >
        <CornerPublicAudit position="bottom2" />
      </Box>
      <Stack
        w="full"
        h="380px"
        maxW={MAX_WIDTH}
        pl={{ base: 6, lg: 8 }}
        pr={{ base: 8, lg: 32 }}
        direction={{ base: 'column', lg: 'row' }}
        alignItems={{ base: 'flex-start', lg: 'center' }}
        justifyContent={{ base: 'initial', lg: 'space-between' }}
        space={{ base: 20, lg: 0 }}
      >
        <Text fontSize={{ base: 28, lg: 22 }} color="general.900" bold>
          {t(keys.publicAudit.humansInNeed)}
        </Text>
        <Button
          px={10}
          py={7}
          _text={{ fontSize: 20 }}
          onPress={goToDonate}
          alignSelf="center"
        >
          {t(keys.donate.donate)}
        </Button>
      </Stack>
      <Box
        bottom="0"
        right={{ base: '80px', lg: '200px' }}
        zIndex="-1"
        position="absolute"
        w={{ base: '216px', lg: '330px' }}
        h={{ base: '70px', lg: '74px' }}
      >
        <CornerPublicAudit position="bottom3" />
      </Box>
      <Box
        bottom="40px"
        right="0"
        zIndex="-1"
        position="absolute"
        w={{ base: '56px', lg: '100px' }}
        h={{ base: '140px', lg: '250px' }}
      >
        <CornerPublicAudit position="bottom4" />
      </Box>
    </VStack>
  )
}

export default PublicAuditFooter
