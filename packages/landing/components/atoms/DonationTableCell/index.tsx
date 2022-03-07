import { HStack, View, VStack, Text, Button } from 'native-base'

interface IDonationTableCellProps {
  item: {
    id: string
    type: string
    amount: string
    etherscanLink: string
    detailsLabel: string
  }
}

const redirectToURL = (url: string) => window.open(url, '_blank')

const DonationTableCell = ({ item }: IDonationTableCellProps) => (
  <HStack
    w="100%"
    alignItems="center"
    justifyContent="flex-start"
    px="36px"
    h="123px"
  >
    <View flex="1" borderRadius="20px" justifyContent="flex-start">
      <Text fontSize="xl">{item.amount}</Text>
    </View>
    <VStack flex="1" justifyContent="flex-start">
      <Text fontSize="sm" fontWeight="bold">
        {item.type}
      </Text>
    </VStack>
    <View flex="1" alignItems="center" justifyContent="center">
      <Button variant="link" onPress={() => redirectToURL(item.etherscanLink)}>
        {item.detailsLabel}
      </Button>
    </View>
  </HStack>
)

export default DonationTableCell
