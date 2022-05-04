import { Icon } from 'native-base'
import type { IIconProps } from 'native-base'
import { Path } from 'react-native-svg'

const CloseIcon = ({
  color = 'greenColor.600',
  size = '20px',
  ...props
}: IIconProps) => (
  <Icon size={size} viewBox="0 0 20 20" {...props}>
    <Path
      d="M10.0015 10.0004L18.7392 18.7381M1.26379 18.7381L10.0015 10.0004L1.26379 18.7381ZM18.7392 1.2627L10.0015 10.0004L18.7392 1.2627ZM10.0015 10.0004L1.26379 1.2627L10.0015 10.0004Z"
      stroke={color as string}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
)

export default CloseIcon
