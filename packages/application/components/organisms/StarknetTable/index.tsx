import { Button, HStack, Text, VStack } from 'native-base'
import { FullGenericHeader } from '@components/atoms'
import { MAX_WIDTH } from '@constants'

interface StarknetTableProps {
  header: string
  tableHeaders: string[]
  items: string[][]
  minH?: string
  onClick?: (itemIndex: number) => void
  isLoading: boolean
}

const StarknetTable = ({
  header,
  tableHeaders,
  items,
  minH,
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
      minH={minH || '640px'}
      justifyContent="start"
      mt={{ base: 8, lg: 16 }}
      px={{ base: 0, lg: 8 }}
    >
      <Text alignSelf="flex-center" my={6} ml={{ base: 4, lg: 0 }}>
        {header}
      </Text>
      <FullGenericHeader columns={columns} alignment="center" />
      {isLoading ? (
        <VStack mt="16px">
          <Text>Loading...</Text>
        </VStack>
      ) : (
        <VStack w="full">
          {items.map((item, index) => (
            <HStack
              w="full"
              mt="16px"
              cursor={onClick ? 'pointer' : 'default'}
              key={`row-${item[0]}`}
            >
              {item.map((itemValue) =>
                onClick ? (
                  <Button
                    flex={1}
                    variant="link"
                    onPress={() => onClick(index)}
                    justifyContent="center"
                    key={`value-${itemValue}`}
                  >
                    <Text>{itemValue}</Text>
                  </Button>
                ) : (
                  <VStack
                    flex={1}
                    justifyContent="center"
                    px="12px"
                    py="8px"
                    key={`value-${itemValue}`}
                  >
                    <Text>{itemValue}</Text>
                  </VStack>
                )
              )}
            </HStack>
          ))}
        </VStack>
      )}
    </VStack>
  )
}

export default StarknetTable
