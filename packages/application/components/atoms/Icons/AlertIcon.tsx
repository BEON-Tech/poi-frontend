import { Icon } from 'native-base'
import type { IIconProps } from 'native-base'
import { Path } from 'react-native-svg'

const AlertIcon = ({ color = '#DE8603', background = "white", ...props }: IIconProps) => (
  <Icon size="3xl" viewBox="0 0 30 30" {...props}>
    <Path
      d="M25.0536 26.25H4.94634C3.0238 26.25 1.82075 24.1705 2.77907 22.5039L12.8328 5.01921C13.794 3.34745 16.206 3.34743 17.1673 5.0192L27.221 22.5039C28.1793 24.1705 26.9763 26.25 25.0536 26.25Z"
      fill={background as string}
      stroke={color as string}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <Path
      d="M15 11.25V16.25"
      stroke={color as string}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <Path
      d="M15 21.2598L15.01 21.2487"
      stroke={color as string}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
)

export default AlertIcon
