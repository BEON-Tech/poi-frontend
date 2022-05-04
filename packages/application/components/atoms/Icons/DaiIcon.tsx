import { Image } from 'native-base'
import DaiImage from '@assets/images/dai.svg'

const DaiIcon = () => (
  <Image
    alt="DAI"
    w={6}
    h={6}
    source={{
      uri: DaiImage.src,
    }}
    resizeMode="cover"
  />
)

export default DaiIcon
