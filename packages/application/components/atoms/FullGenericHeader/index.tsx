import { HStack, Text } from 'native-base'

interface IFullGenericHeader {
  columns: Array<string>
}

const FullGenericHeader = ({ columns }: IFullGenericHeader) => (
  <HStack w="full">
    {columns.map((column) => (
      <Text flex={1}>{column}</Text>
    ))}
  </HStack>
)

export default FullGenericHeader
