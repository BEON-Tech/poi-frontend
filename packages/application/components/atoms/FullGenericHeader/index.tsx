import { useBreakpoint } from '@hooks'
import { HStack, Text } from 'native-base'

interface IFullGenericHeader {
  columns: Array<{ flex: number; title: string }>
  alignment?: 'center' | 'start' | 'end'
}

const FullGenericHeader = ({
  columns,
  alignment = 'start',
}: IFullGenericHeader) => {
  const { isDesktop } = useBreakpoint()

  return (
    <HStack
      w="full"
      pb={{ base: 0, lg: 3 }}
      borderBottomColor="general.200"
      borderBottomWidth={0.5}
    >
      {isDesktop &&
        columns.map((column) => (
          <Text flex={column.flex} key={column.title} textAlign={alignment}>
            {column.title}
          </Text>
        ))}
    </HStack>
  )
}

export default FullGenericHeader
