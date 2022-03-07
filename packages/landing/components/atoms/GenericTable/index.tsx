import { FlatList, Button, useToken, View, HStack } from 'native-base'
import type { IFlatListProps } from 'native-base/lib/typescript/components/basic/FlatList/types'

export interface IGenericTableProps
  extends Pick<
    IFlatListProps,
    'initialNumToRender' | 'renderItem' | 'data' | 'ListHeaderComponent'
  > {
  footerTitle: string
  hasMore: boolean
  loading: boolean
}

interface IFooterProps {
  title: string
}

const Footer = ({ title }: IFooterProps) => (
  <HStack
    pl="20px"
    justifyContent="flex-start"
    alignItems="center"
    // py="20px"
    h="70px"
    borderTopWidth="1px"
    borderTopColor="general.100"
  >
    <Button variant="link" _text={{ fontSize: 'lg' }}>
      {title}
    </Button>
  </HStack>
)

const Divider = () => <View h="2px" bg="general.100" w="100%" />

const GenericTable = ({
  footerTitle,
  initialNumToRender = 3,
  data,
  renderItem,
  hasMore,
  loading,
  ListHeaderComponent,
}: IGenericTableProps) => {
  const borderColor = useToken('colors', 'general.300')
  const showRenderMoreFooter = !loading && hasMore

  return (
    <FlatList
      contentContainerStyle={{
        borderRadius: 30,
        borderColor,
        borderWidth: 1,
        width: '640px',
        height: '533px',
      }}
      ListHeaderComponent={ListHeaderComponent}
      keyExtractor={(item) => item.id}
      data={data}
      renderItem={renderItem}
      horizontal={false}
      initialNumToRender={initialNumToRender}
      ItemSeparatorComponent={Divider}
      ListFooterComponent={
        showRenderMoreFooter ? <Footer title={footerTitle} /> : null
      }
    />
  )
}

export default GenericTable
