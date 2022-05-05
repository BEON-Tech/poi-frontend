import { Image } from 'native-base'
import UsdtImage from '@assets/images/usdt.svg'

const UsdtIcon = () => (
  <Image
    alt="USDT"
    w={6}
    h={6}
    source={{
      uri: UsdtImage.src,
    }}
    resizeMode="cover"
  />
)

export default UsdtIcon