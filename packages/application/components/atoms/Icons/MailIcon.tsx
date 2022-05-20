import { Image } from 'native-base'
import type { IImageProps } from 'native-base'
import MailLogo from '@assets/images/mail_logo.png'

const MailIcon = ({ ...props } : IImageProps) => (
  <Image
    alt="POI"
    source={{
      uri: MailLogo.src,
    }}
    resizeMode="cover"
    {...props}
  />
)

export default MailIcon
