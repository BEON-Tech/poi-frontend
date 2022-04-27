import { Image } from 'native-base'
import SpanishFlag from '../../../../assets/images/es_flag.png'

const ESFlag = (size: number) => (
  <Image
    alt="Spanish"
    w={size}
    h={size}
    source={{
      uri: SpanishFlag.src,
    }}
    resizeMode="cover"
  />
)

export default ESFlag