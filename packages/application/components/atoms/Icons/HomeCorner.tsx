import { Image } from 'native-base'
import type { IImageProps } from 'native-base'
import HomeCorner1Big from '@assets/images/home_corner1.svg'
import HomeCorner2Big from '@assets/images/home_corner2.svg'
import HomeCorner1Small from '@assets/images/home_corner1_resp.svg'
import HomeCorner2Small from '@assets/images/home_corner2_resp.svg'

interface ICornerIconProps extends IImageProps {
  iconPosition: string
}

const cornerImages: any = {
  corner1Big: HomeCorner1Big,
  corner2Big: HomeCorner2Big,
  corner1Small: HomeCorner1Small,
  corner2Small: HomeCorner2Small,
}

const HomeCorner = ({ iconPosition, ...props }: ICornerIconProps) => (
  <Image
    alt="HomeCorner"
    source={{
      uri: cornerImages[iconPosition].src,
    }}
    resizeMode="stretch"
    {...props}
  />
)

export default HomeCorner