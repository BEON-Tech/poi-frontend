import { Icon } from 'native-base'
import type { IIconProps } from 'native-base'
import { Path } from 'react-native-svg'

const HomeIcon = ({ color = 'greenColor.600', size = "3xl", ...props }: IIconProps) => (
  <Icon size={size} viewBox="0 0 24 24" {...props}>
    <Path
      d="M3 9.5L12 4L21 9.5"
      fill="none"
      stroke={color as string}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19 13V19.4C19 19.7314 18.7314 20 18.4 20H5.6C5.26863 20 5 19.7314 5 19.4V13"
      fill="none"
      stroke={color as string}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
)

export default HomeIcon
