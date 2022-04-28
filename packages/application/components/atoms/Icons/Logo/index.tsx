import { Image } from 'native-base'
import PoiLogo from '@assets/images/poi.svg'

const POILogo = ({ size = "84px" } : any) => (
  <Image
    alt="POI"
    w={size}
    h={size}
    source={{
      uri: PoiLogo.src,
    }}
    resizeMode="cover"
  />
)

export default POILogo