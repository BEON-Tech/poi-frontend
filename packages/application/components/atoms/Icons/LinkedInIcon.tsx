import { Image } from 'native-base'
import type { IImageProps } from 'native-base'
import LinkedInLogo from '@assets/images/linkedin_logo.png'

const LinkedInIcon = ({ ...props } : IImageProps) => (
  <Image
    alt="LinkedIn"
    source={{
      uri: LinkedInLogo.src,
    }}
    resizeMode="cover"
    {...props}
  />
)

export default LinkedInIcon
