import { HStack, View, VStack, Text, Button } from 'native-base'
import { Certification } from '@constants/types'

interface ICertificationCellItems extends Certification {
  detailsLabel: string
}
export interface ICertificationCellProps {
  item: ICertificationCellItems
}

const redirectToURL = (url: string) => window.open(url, '_blank')

const CertificationCell = ({ item }: ICertificationCellProps) => {
  const dateFormatted = new Date(item.date).toLocaleDateString()
  const timeFormatted = new Date(item.date).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
  return (
    <HStack
      w="100%"
      alignItems="center"
      justifyContent="flex-start"
      px="36px"
      h="123px"
    >
      <HStack flex="1" alignItems="center" justifyContent="flex-start">
        <View w="100px" h="80px" maxW="100px" maxH="80px" borderRadius="20px">
          <img
            src={item.image}
            width={100}
            height={80}
            alt={`Certification cell item ${item.id}`}
          />
        </View>
      </HStack>
      <VStack flex="1" justifyContent="center">
        <Text fontWeight="semibold" fontSize="xl">
          {dateFormatted}
        </Text>
        <Text fontWeight="semibold" fontSize="sm">
          {timeFormatted}
        </Text>
      </VStack>
      <HStack flex="1" alignItems="center" justifyContent="center">
        <Button
          variant="link"
          textDecorationLine="underline"
          _text={{ fontSize: 'md' }}
          onPress={() => redirectToURL(item.detailsLink)}
        >
          {item.detailsLabel}
        </Button>
      </HStack>
    </HStack>
  )
}

export default CertificationCell
