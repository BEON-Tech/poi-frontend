import { Image } from 'native-base'
import EnglishFlag from '@assets/images/en_flag.png'

const ENFlag = (size: number) => (
  <Image
    alt="English"
    w={size}
    h={size}
    source={{
      uri: EnglishFlag.src,
    }}
    resizeMode="cover"
  />
)

export default ENFlag