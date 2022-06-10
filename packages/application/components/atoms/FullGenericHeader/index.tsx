import { HStack, Text } from 'native-base'

interface IFullGenericHeader {
  columns: Array<{flex: number, title: string}>
}

const FullGenericHeader = ({ columns }: IFullGenericHeader) => (
  <HStack
    w="full"
    pb={3}
    borderBottomColor="general.200"
    borderBottomWidth={0.5}
  >
    {columns.map((column) => (
      <Text flex={column.flex}>{column.title}</Text>
    ))}
  </HStack>
)

export default FullGenericHeader
