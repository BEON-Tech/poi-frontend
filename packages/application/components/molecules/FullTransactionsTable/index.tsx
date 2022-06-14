import { FlatList, VStack } from 'native-base'
import { FullTransactionsCell, FullTransactionsHeader } from '@components/atoms'
import { Transaction } from '@constants/types'
import { FullTablePaginator } from '..'

interface IFullTransactionsTableBody {
  data: Array<Transaction>
}

const FullTransactionsTableBody = ({ data }: IFullTransactionsTableBody) => (
  <FlatList
    w="full"
    data={data}
    renderItem={({ item }) => <FullTransactionsCell transaction={item} />}
    keyExtractor={(item) => item.id.toString()}
  />
)

const FullTransactionsTable = () => {
  const data: Array<Transaction> = [
    {
      id: 13,
      type: 'administrativeExpenses',
      senderAddress: '0x75ded588d2a4734d0a61b9953a3c4e6c6d00abc4',
      recipientAddress: '0x64cb770d544572e2ea2c06ccde6b474963dace7a',
      network: 'Ethereum',
      hash: '0xf2abf2f0cf3731b5fad3f2d7eb58879320cf2e2fc42b128a9c30306cf2eafb65',
      tokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
      tokenName: 'DAI',
      amount: '570000000000000000000',
      status: 'confirmed',
      createdAt: '2022-06-07T14:29:10.584Z',
      updatedAt: '2022-06-07T14:30:04.054Z',
      transactionUrl:
        'https://etherscan.io/tx/0xf2abf2f0cf3731b5fad3f2d7eb58879320cf2e2fc42b128a9c30306cf2eafb65',
    },
    {
      id: 12,
      type: 'administrativeExpenses',
      senderAddress: '0x75ded588d2a4734d0a61b9953a3c4e6c6d00abc4',
      recipientAddress: '0x5a34eb1e114d8a3c300ae6f99f612f55e3333597',
      network: 'Ethereum',
      hash: '0xc155530d168565467e5a003e7a7f22827ba86dfc368f8b7d75c655fda829c731',
      tokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
      tokenName: 'DAI',
      amount: '790000000000000000000',
      status: 'confirmed',
      createdAt: '2022-06-07T14:26:04.772Z',
      updatedAt: '2022-06-07T14:30:01.208Z',
      transactionUrl:
        'https://etherscan.io/tx/0xc155530d168565467e5a003e7a7f22827ba86dfc368f8b7d75c655fda829c731',
    },
    {
      id: 4,
      type: 'administrativeExpenses',
      senderAddress: '0x75ded588d2a4734d0a61b9953a3c4e6c6d00abc4',
      recipientAddress: '0x5a34eb1e114d8a3c300ae6f99f612f55e3333597',
      network: 'Ethereum',
      hash: '0x82d11d4eee0bd195e220eac14ba8df592a720997c3d15d87eb772524de171db6',
      tokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
      tokenName: 'DAI',
      amount: '385000000000000000000',
      status: 'confirmed',
      createdAt: '2022-05-03T20:51:53.788Z',
      updatedAt: '2022-05-03T20:55:00.959Z',
      transactionUrl:
        'https://etherscan.io/tx/0x82d11d4eee0bd195e220eac14ba8df592a720997c3d15d87eb772524de171db6',
    },
    {
      id: 3,
      type: 'donation',
      senderAddress: '0x70104e7f57125d6282436b8b85f4266e48895911',
      recipientAddress: '0xa7dda301970378bb12c28c4214cdfdb6fe44636c',
      network: 'Ethereum',
      hash: '0x1092516b467e45fa7fdff8cc963eda9a1ecb03e280ad05c13e49e9be9c9dc033',
      tokenAddress: null,
      tokenName: 'ETH',
      amount: '8000000000000000',
      status: 'confirmed',
      createdAt: '2022-04-08T15:27:18.564Z',
      updatedAt: '2022-04-08T15:35:00.838Z',
      transactionUrl:
        'https://etherscan.io/tx/0x1092516b467e45fa7fdff8cc963eda9a1ecb03e280ad05c13e49e9be9c9dc033',
    },
    {
      id: 2,
      type: 'donation',
      senderAddress: '0x63c24f164fa69f4db7f45f211a8e089c157b4747',
      recipientAddress: '0xa7dda301970378bb12c28c4214cdfdb6fe44636c',
      network: 'Ethereum',
      hash: '0x0610fec1987f5b69c998aaf491d36c98e49279a506751a7b6416148f255102d5',
      tokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
      tokenName: 'DAI',
      amount: '25000000000000000000',
      status: 'confirmed',
      createdAt: '2022-04-07T22:42:38.576Z',
      updatedAt: '2022-04-08T15:25:00.554Z',
      transactionUrl:
        'https://etherscan.io/tx/0x0610fec1987f5b69c998aaf491d36c98e49279a506751a7b6416148f255102d5',
    },
    {
      id: 113,
      type: 'administrativeExpenses',
      senderAddress: '0x75ded588d2a4734d0a61b9953a3c4e6c6d00abc4',
      recipientAddress: '0x64cb770d544572e2ea2c06ccde6b474963dace7a',
      network: 'Ethereum',
      hash: '0xf2abf2f0cf3731b5fad3f2d7eb58879320cf2e2fc42b128a9c30306cf2eafb65',
      tokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
      tokenName: 'DAI',
      amount: '570000000000000000000',
      status: 'confirmed',
      createdAt: '2022-06-07T14:29:10.584Z',
      updatedAt: '2022-06-07T14:30:04.054Z',
      transactionUrl:
        'https://etherscan.io/tx/0xf2abf2f0cf3731b5fad3f2d7eb58879320cf2e2fc42b128a9c30306cf2eafb65',
    },
    {
      id: 112,
      type: 'administrativeExpenses',
      senderAddress: '0x75ded588d2a4734d0a61b9953a3c4e6c6d00abc4',
      recipientAddress: '0x5a34eb1e114d8a3c300ae6f99f612f55e3333597',
      network: 'Ethereum',
      hash: '0xc155530d168565467e5a003e7a7f22827ba86dfc368f8b7d75c655fda829c731',
      tokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
      tokenName: 'DAI',
      amount: '790000000000000000000',
      status: 'confirmed',
      createdAt: '2022-06-07T14:26:04.772Z',
      updatedAt: '2022-06-07T14:30:01.208Z',
      transactionUrl:
        'https://etherscan.io/tx/0xc155530d168565467e5a003e7a7f22827ba86dfc368f8b7d75c655fda829c731',
    },
    {
      id: 114,
      type: 'administrativeExpenses',
      senderAddress: '0x75ded588d2a4734d0a61b9953a3c4e6c6d00abc4',
      recipientAddress: '0x5a34eb1e114d8a3c300ae6f99f612f55e3333597',
      network: 'Ethereum',
      hash: '0x82d11d4eee0bd195e220eac14ba8df592a720997c3d15d87eb772524de171db6',
      tokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
      tokenName: 'DAI',
      amount: '385000000000000000000',
      status: 'confirmed',
      createdAt: '2022-05-03T20:51:53.788Z',
      updatedAt: '2022-05-03T20:55:00.959Z',
      transactionUrl:
        'https://etherscan.io/tx/0x82d11d4eee0bd195e220eac14ba8df592a720997c3d15d87eb772524de171db6',
    },
    {
      id: 133,
      type: 'donation',
      senderAddress: '0x70104e7f57125d6282436b8b85f4266e48895911',
      recipientAddress: '0xa7dda301970378bb12c28c4214cdfdb6fe44636c',
      network: 'Ethereum',
      hash: '0x1092516b467e45fa7fdff8cc963eda9a1ecb03e280ad05c13e49e9be9c9dc033',
      tokenAddress: null,
      tokenName: 'ETH',
      amount: '8000000000000000',
      status: 'confirmed',
      createdAt: '2022-04-08T15:27:18.564Z',
      updatedAt: '2022-04-08T15:35:00.838Z',
      transactionUrl:
        'https://etherscan.io/tx/0x1092516b467e45fa7fdff8cc963eda9a1ecb03e280ad05c13e49e9be9c9dc033',
    },
    {
      id: 132,
      type: 'donation',
      senderAddress: '0x63c24f164fa69f4db7f45f211a8e089c157b4747',
      recipientAddress: '0xa7dda301970378bb12c28c4214cdfdb6fe44636c',
      network: 'Ethereum',
      hash: '0x0610fec1987f5b69c998aaf491d36c98e49279a506751a7b6416148f255102d5',
      tokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
      tokenName: 'DAI',
      amount: '25000000000000000000',
      status: 'confirmed',
      createdAt: '2022-04-07T22:42:38.576Z',
      updatedAt: '2022-04-08T15:25:00.554Z',
      transactionUrl:
        'https://etherscan.io/tx/0x0610fec1987f5b69c998aaf491d36c98e49279a506751a7b6416148f255102d5',
    },
  ]

  return (
    <VStack w="full" mt={{ base: 0, lg: 4 }}>
      <FullTransactionsHeader />
      <FullTransactionsTableBody data={data} />
      <FullTablePaginator />
    </VStack>
  )
}

export default FullTransactionsTable
