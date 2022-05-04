import { Icon } from 'native-base'
import type { IIconProps } from 'native-base'
import { Path } from 'react-native-svg'

const WalletIcon = ({ color = 'greenColor.600', size = "3xl", ...props }: IIconProps) => (
  <Icon size={size} viewBox="0 0 24 24" {...props}>
    <Path
      d="M19 20H5C3.89543 20 3 19.1046 3 18V9C3 7.89543 3.89543 7 5 7H19C20.1046 7 21 7.89543 21 9V18C21 19.1046 20.1046 20 19 20Z"
      fill="none"
      stroke={color as string}
      strokeWidth="1.5"
    />
    <Path
      d="M16.5 14C16.2239 14 16 13.7761 16 13.5C16 13.2239 16.2239 13 16.5 13C16.7761 13 17 13.2239 17 13.5C17 13.7761 16.7761 14 16.5 14Z"
      fill="none"
      stroke={color as string}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18 7.00041V5.60363C18 4.28957 16.7544 3.33258 15.4847 3.67116L4.48467 6.6045C3.60917 6.83797 3 7.63087 3 8.53697V9.00041"
      fill="none"
      stroke={color as string}
      strokeWidth="1.5"
    />
  </Icon>
)

export default WalletIcon
