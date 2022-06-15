import { Image } from 'native-base'
import type { IImageProps } from 'native-base'
import HomePhoto1 from '@assets/images/home_photo1.png'
import HomePhoto2 from '@assets/images/home_photo2.png'

interface IPhotoIconProps extends IImageProps {
  photo: string
}

const photoIconImages: any = {
  homePhoto1: HomePhoto1,
  homePhoto2: HomePhoto2,
}

const HomePhotoIcon = ({ photo, ...props }: IPhotoIconProps) => (
  <Image
    alt="HomePhotoIcon"
    source={{
      uri: photoIconImages[photo].src,
    }}
    resizeMode="stretch"
    {...props}
  />
)

export default HomePhotoIcon
