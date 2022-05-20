import { Image } from 'native-base'
import type { IImageProps } from 'native-base'
import TwitterLogo from '@assets/images/twitter_logo.png'

const TwitterIcon = ({ ...props } : IImageProps) => (
  <Image
    alt="Twitter"
    source={{
      uri: TwitterLogo.src,
    }}
    resizeMode="cover"
    {...props}
  />
)

export default TwitterIcon