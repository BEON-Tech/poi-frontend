import { Image } from 'native-base'
import WbtcImage from '../../../../assets/images/wbtc.svg'

const WbtcIcon = () => (
  <Image
    alt="WBTC"
    w={6}
    h={6}
    source={{
      uri: WbtcImage.src,
    }}
    resizeMode="cover"
  />
)

export default WbtcIcon
