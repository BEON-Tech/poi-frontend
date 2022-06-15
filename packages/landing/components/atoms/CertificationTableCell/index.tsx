import { HStack, View, VStack, Text, Button } from 'native-base'
import { Applicant, Certification } from '@constants/types'
import Config from '@config'

interface ICertificationCellItems extends Certification {
  detailsLabel: string
}
export interface ICertificationCellProps {
  item: ICertificationCellItems & { collapsed: boolean }
}

const openBlockchainExplorer = (applicant?: Applicant) => {
  const url = `${Config.etherscanURL}/address/${applicant?.walletAddress}`
  window.open(url, '_blank')
}

const MoreDetails = ({ item }: ICertificationCellProps) => (
  <Button
    p="0"
    h="100%"
    w="auto"
    alignSelf="flex-start"
    variant="link"
    _text={{ fontSize: 'md' }}
    onPress={() => openBlockchainExplorer(item.applicant)}
  >
    {item.detailsLabel}
  </Button>
)

const CertificationCell = ({ item }: ICertificationCellProps) => {
  const dateFormatted = new Date(item.createdAt).toLocaleDateString()
  const { collapsed } = item

  return (
    <HStack
      w="100%"
      alignItems="center"
      justifyContent="flex-start"
      px="36px"
      h="123px"
    >
      <Text flex="1">{item.program?.title}</Text>
      <VStack flex="1" alignItems="flex-start">
        <Text fontSize={14}>{dateFormatted}</Text>
        {collapsed && (
          <View>
            <MoreDetails item={item} />
          </View>
        )}
      </VStack>
      {!collapsed && (
        <HStack flex="1" alignItems="center" justifyContent="flex-start">
          <MoreDetails item={item} />
        </HStack>
      )}
    </HStack>
  )
}

export default CertificationCell
