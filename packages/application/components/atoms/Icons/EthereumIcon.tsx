import { Image } from 'native-base'
import EthereumImage from '@assets/images/ethereum.svg'

const EthereumIcon = () => (
  <Image
    alt="ETH"
    w={6}
    h={6}
    source={{
      uri: EthereumImage.src,
    }}
    resizeMode="cover"
  />
)

export default EthereumIcon
