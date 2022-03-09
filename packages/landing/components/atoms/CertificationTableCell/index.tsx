import { HStack, View, VStack, Text, Button } from 'native-base'

export interface ICertificationCellProps {
  item: {
    id: string
    image: string
    detailsLink: string
    detailsLabel: string
    date: number
    range: string
  }
}

const redirectToURL = (url: string) => window.open(url, '_blank')

const CertificationCell = ({ item }: ICertificationCellProps) => (
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
        {item.date}
      </Text>
      <Text fontWeight="semibold" fontSize="sm">
        {item.range}
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

export default CertificationCell
