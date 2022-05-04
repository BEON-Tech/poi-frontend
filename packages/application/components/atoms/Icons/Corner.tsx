import { Image } from 'native-base'
import CornerLeftup from '@assets/images/corner_leftup.svg'
import CornerRightup from '@assets/images/corner_rightup.svg'
import CornerLeftdown from '@assets/images/corner_leftdown.svg'
import CornerRightdown from '@assets/images/corner_rightdown.svg'

interface ICornerIconProps {
  position: string,
}

const cornerImages: any = {
  leftup: CornerLeftup,
  rightup: CornerRightup,
  leftdown: CornerLeftdown,
  rightdown: CornerRightdown,
}

const Corner = ({ position }: ICornerIconProps) => (
  <Image
    alt="Corner"
    w="100%"
    h="100%"
    source={{
      uri: cornerImages[position].src,
    }}
    resizeMode="contain"
  />
)

export default Corner
