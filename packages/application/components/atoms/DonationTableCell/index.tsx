import { HStack, View, VStack, Text, Button } from 'native-base'
import { Donation } from '@constants/types'

interface IDonationCellItems extends Donation {
  detailsLabel: string
}

interface IDonationTableCellProps {
  item: IDonationCellItems & { collapsed: boolean }
}

const redirectToURL = (url: string) => window.open(url, '_blank')

const MoreDetails = ({ item }: IDonationTableCellProps) => (
  <Button
    p="0"
    h="100%"
    w="auto"
    alignSelf="flex-start"
    variant="link"
    _text={{ fontSize: 'md' }}
    onPress={() => redirectToURL(item.transactionUrl)}
  >
    {item.detailsLabel}
  </Button>
)

const DonationTableCell = ({ item }: IDonationTableCellProps) => {
  const { collapsed } = item

  return (
    <HStack
      w="100%"
      alignItems="center"
      justifyContent="flex-start"
      px="36px"
      h="123px"
    >
      <View flex="1" borderRadius="20px" justifyContent="flex-start">
        <Text fontSize={{ base: 'xl', lg: 30 }}>{item.amount}</Text>
      </View>
      <VStack flex="1" alignItems="flex-start">
        <Text fontSize={14} fontWeight="bold">
          {item.type}
        </Text>
        {collapsed && <MoreDetails item={item} />}
      </VStack>
      {!collapsed && (
        <View flex="1" alignItems="center" justifyContent="center">
          <MoreDetails item={item} />
        </View>
      )}
    </HStack>
  )
}

export default DonationTableCell
