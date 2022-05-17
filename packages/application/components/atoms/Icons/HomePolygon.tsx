import { Image } from 'native-base'
import type { IImageProps } from 'native-base'
import HomePolygon1 from '@assets/images/home_polygon1.svg'
import HomePolygon2 from '@assets/images/home_polygon2.svg'
import HomePolygonResp from '@assets/images/home_polygon_resp.svg'

interface IPolygonIconProps extends IImageProps {
  polygon: string
}

const polygonImages: any = {
  homePolygon1: HomePolygon1,
  homePolygon2: HomePolygon2,
  homePolygonResp: HomePolygonResp,
}

const Corner = ({ polygon, ...props }: IPolygonIconProps) => (
  <Image
    alt="HomeCorner"
    source={{
      uri: polygonImages[polygon].src,
    }}
    resizeMode="stretch"
    {...props}
  />
)

export default Corner
