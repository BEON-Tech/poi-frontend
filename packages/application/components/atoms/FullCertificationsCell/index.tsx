import { Button, HStack, Stack, Text } from 'native-base'
import { useTranslation } from 'react-i18next'
import { keys } from '@i18n'
import { FullCertification } from '@constants/types'

interface IFullCertificationsCell {
  certification: FullCertification
}

const FullCertificationsCell = ({ certification }: IFullCertificationsCell) => {
  const { t } = useTranslation()

  const formatDate = () =>
    new Date(certification.createdAt).toLocaleDateString()

  const isApproved = () => certification.status === 'approved'

  const openBlockchainExplorer = () => {
    // window.open(transaction.transactionUrl, '_blank')
  }

  return (
    <Stack
      w="full"
      px={{ base: 4, lg: 0 }}
      py={{ base: 6, lg: 8 }}
      borderBottomColor="general.200"
      borderBottomWidth={0.5}
      justifyContent="flex"
      alignItems={{ base: 'initial', lg: 'center' }}
      direction={{ base: 'column', lg: 'row' }}
      space={{ base: 2, lg: 0 }}
    >
      <HStack flex={1} alignItems={{ base: 'flex-end', lg: 'center' }}>
        <Text flex={1} color="general.900" fontSize={{ base: 'lg', lg: 'md' }}>
          {certification.program?.title}
        </Text>
        <Text
          display={{ base: 'flex', lg: 'none' }}
          fontSize={{ base: 'sm', lg: 'md' }}
        >
          {formatDate()}
        </Text>
      </HStack>
      <Text flex={1} color="general.900">
        {certification.program?.place}
      </Text>
      <Text
        flex={1}
        color={isApproved() ? 'greenColor.700' : 'general.900'}
        bold={isApproved()}
      >
        {t(keys.publicAudit.certificationsTable[certification.status])}
      </Text>
      <Text flex={1} display={{ base: 'none', lg: 'flex' }}>
        {formatDate()}
      </Text>
      <Button
        flex={1}
        variant="link"
        mt={{ base: 2, lg: 0 }}
        p={0}
        justifyContent="flex-start"
        _text={{
          fontSize: 16,
          isTruncated: true,
          w: '60%',
        }}
        onPress={openBlockchainExplorer}
      >
        {certification.applicant?.walletAddress || ''}
      </Button>
    </Stack>
  )
}

export default FullCertificationsCell
