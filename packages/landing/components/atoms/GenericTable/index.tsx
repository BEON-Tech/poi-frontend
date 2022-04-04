import { FlatList, Button, useToken, View, HStack } from 'native-base'
import type { IFlatListProps } from 'native-base/lib/typescript/components/basic/FlatList/types'
import { ComingSoon } from '@components/atoms'

export interface IGenericTableProps
  extends Pick<
    IFlatListProps<any>,
    | 'initialNumToRender'
    | 'renderItem'
    | 'data'
    | 'ListHeaderComponent'
    | 'extraData'
  > {
  footerTitle: string
  hasMore: boolean
  loading: boolean
}

interface IFooterProps {
  title: string
  enabled: boolean
}

const Footer = ({ title, enabled }: IFooterProps) => (
  <HStack
    pl="20px"
    justifyContent="flex-start"
    alignItems="center"
    h="70px"
    borderTopWidth="1px"
    borderTopColor="general.100"
  >
    <ComingSoon
      Component={(props) => (
        <Button
          variant="link"
          _text={{ fontSize: 'lg' }}
          isDisabled={!enabled}
          {...props}
        >
          {title}
        </Button>
      )}
    />
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
  extraData,
}: IGenericTableProps) => {
  const borderColor = useToken('colors', 'general.300')
  const footerEnabled = !loading && hasMore

  return (
    <FlatList
      contentContainerStyle={{
        borderRadius: 30,
        borderColor,
        borderWidth: 1,
        width: '100%',
        maxHeight: '533px',
      }}
      extraData={extraData}
      ListHeaderComponent={ListHeaderComponent}
      keyExtractor={(item) => item.id}
      data={data}
      renderItem={renderItem}
      horizontal={false}
      initialNumToRender={initialNumToRender}
      ItemSeparatorComponent={Divider}
      ListFooterComponent={
        <Footer title={footerTitle} enabled={footerEnabled} />
      }
    />
  )
}

export default GenericTable
