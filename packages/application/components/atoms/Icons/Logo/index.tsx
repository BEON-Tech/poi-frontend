import { Image } from 'native-base'
import PoiLogo from '../../../../assets/images/poi.svg'

const POILogo = () => (
  <Image
    alt="POI"
    w="84px"
    h="84px"
    source={{
      uri: PoiLogo.src,
    }}
    resizeMode="cover"
  />
)

export default POILogo