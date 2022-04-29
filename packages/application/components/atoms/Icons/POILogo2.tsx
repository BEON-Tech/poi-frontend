import { Image } from 'native-base'
import PoiLogoWithBackground from '@assets/images/logoPOI1.png'

const POILogo2 = ({ size = "84px" } : any) => (
  <Image
    alt="POI"
    w={size}
    h={size}
    source={{
      uri: PoiLogoWithBackground.src,
    }}
    resizeMode="cover"
  />
)

export default POILogo2