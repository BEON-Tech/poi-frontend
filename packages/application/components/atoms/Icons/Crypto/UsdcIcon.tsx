import { Image } from 'native-base'
import UsdcImage from '../../../../assets/images/usdc.svg'

const UsdcIcon = () => (
  <Image
    alt="USDC"
    w={6}
    h={6}
    source={{
      uri: UsdcImage.src,
    }}
    resizeMode="cover"
  />
)

export default UsdcIcon
