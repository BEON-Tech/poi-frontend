import Image from 'next/image'
import CornerLeftup from '@assets/images/corner_leftup.svg'
import CornerRightup from '@assets/images/corner_rightup.svg'
import CornerLeftdown from '@assets/images/corner_leftdown.svg'
import CornerRightdown from '@assets/images/corner_rightdown.svg'

interface ICornerIconProps {
  position: string
}

const cornerImages: any = {
  leftup: CornerLeftup,
  rightup: CornerRightup,
  leftdown: CornerLeftdown,
  rightdown: CornerRightdown,
}

const Corner = ({ position }: ICornerIconProps) => <Image alt="Corner" src={cornerImages[position]} />

export default Corner
