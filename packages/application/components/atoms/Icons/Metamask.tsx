import { Image } from 'native-base'
import metamask from '@assets/images/metamask.svg'

const MetamaskLogo = () => (
  <Image
    alt="Metamask"
    w={25}
    h={25}
    source={{
      uri: metamask.src,
    }}
    resizeMode="cover"
  />
)

export default MetamaskLogo
