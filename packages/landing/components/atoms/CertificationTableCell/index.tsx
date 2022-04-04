import { HStack, View, VStack, Text, Button } from 'native-base'
import { Certification } from '@constants/types'

interface ICertificationCellItems extends Certification {
  detailsLabel: string
}
export interface ICertificationCellProps {
  item: ICertificationCellItems & { collapsed: boolean }
}

const redirectToURL = (url: string) => window.open(url, '_blank')

const MoreDetails = ({ item }: ICertificationCellProps) => (
  <Button
    p="0"
    h="100%"
    alignSelf="flex-start"
    variant="link"
    _text={{ fontSize: 'md' }}
    onPress={() => redirectToURL(item.detailsLink)}
  >
    {item.detailsLabel}
  </Button>
)

const CertificationCell = ({ item }: ICertificationCellProps) => {
  const dateFormatted = new Date(item.date).toLocaleDateString()
  const timeFormatted = new Date(item.date).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })

  const { collapsed } = item

  return (
    <HStack
      w="100%"
      alignItems="center"
      justifyContent="flex-start"
      px="36px"
      h="123px"
    >
      <HStack flex="1" alignItems="center" justifyContent="flex-start">
        <View maxW="100px" maxH="80px" borderRadius="20px" overflow="hidden">
          <img
            src={item.image}
            width="100%"
            height="100%"
            alt={`Certification cell item ${item.id}`}
          />
        </View>
      </HStack>
      <VStack flex="1" justifyContent="flex-start">
        <Text fontWeight="semibold" fontSize="xl">
          {dateFormatted}
        </Text>
        <Text fontWeight="semibold" fontSize="sm">
          {timeFormatted}
        </Text>
        {collapsed && <MoreDetails item={item} />}
      </VStack>
      {!collapsed && (
        <HStack flex="1" alignItems="center" justifyContent="center">
          <MoreDetails item={item} />
        </HStack>
      )}
    </HStack>
  )
}

export default CertificationCell
