import { Button, HStack, Text, VStack } from 'native-base'
import { FullGenericHeader } from '@components/atoms'
import { MAX_WIDTH } from '@constants'

interface StarknetTableProps {
  header: string
  tableHeaders: string[]
  items: string[][]
  onClick: (itemIndex: number) => void
  isLoading: boolean
}

const StarknetTable = ({
  header,
  tableHeaders,
  items,
  onClick,
  isLoading,
}: StarknetTableProps) => {
  const columns: Array<{ flex: number; title: string }> = []
  tableHeaders.forEach((value) => {
    columns.push({ flex: 1, title: value })
  })

  return (
    <VStack
      w="full"
      maxW={`${MAX_WIDTH}px`}
      minH="640px"
      mt={{ base: 8, lg: 16 }}
      px={{ base: 0, lg: 8 }}
    >
      <Text alignSelf="flex-start" my={6} ml={{ base: 4, lg: 0 }}>
        {header}
      </Text>
      <FullGenericHeader columns={columns} />
      {isLoading ? (
        <VStack mt="16px">
          <Text>Loading...</Text>
        </VStack>
      ) : (
        <VStack w="full">
          {items.map((item, index) => (
            <HStack w="full" mt="16px" cursor="pointer" key={`row-${item[0]}`}>
              {item.map((itemValue) => (
                <Button
                  flex={1}
                  variant="link"
                  onPress={() => onClick(index)}
                  justifyContent="flex-start"
                  key={`value-${itemValue}`}
                >
                  <Text>{itemValue}</Text>
                </Button>
              ))}
            </HStack>
          ))}
        </VStack>
      )}
    </VStack>
  )
}

export default StarknetTable
