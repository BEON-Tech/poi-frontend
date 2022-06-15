import { Image } from 'native-base'
import CornerTopLeft from '@assets/images/public_audit_corner_top_left.svg'
import CornerTopRight from '@assets/images/public_audit_corner_top_right.svg'
import CornerBottom1 from '@assets/images/public_audit_corner_bottom_1.svg'
import CornerBottom2 from '@assets/images/public_audit_corner_bottom_2.svg'
import CornerBottom3 from '@assets/images/public_audit_corner_bottom_3.svg'
import CornerBottom4 from '@assets/images/public_audit_corner_bottom_4.svg'

interface ICornerIconProps {
  position: string
}

const cornerImages: any = {
  topLeft: CornerTopLeft,
  topRight: CornerTopRight,
  bottom1: CornerBottom1,
  bottom2: CornerBottom2,
  bottom3: CornerBottom3,
  bottom4: CornerBottom4,
}

const CornerPublicAudit = ({ position }: ICornerIconProps) => (
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

export default CornerPublicAudit
