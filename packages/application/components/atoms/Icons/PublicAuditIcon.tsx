import { Icon } from 'native-base'
import type { IIconProps } from 'native-base'
import { Path } from 'react-native-svg'

const PublicAuditIcon = ({ color = 'greenColor.600', size = "3xl", ...props }: IIconProps) => (
  <Icon size={size} viewBox="0 0 24 24" {...props}>
    <Path
      d="M7 6H17"
      fill="none"
      stroke={color as string}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7 9H17"
      fill="none"
      stroke={color as string}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9 17H15"
      fill="none"
      stroke={color as string}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3 12H21M3 12H2.6C2.26863 12 2 12.2686 2 12.6V21.4C2 21.7314 2.26863 22 2.6 22H21.4C21.7314 22 22 21.7314 22 21.4V12.6C22 12.2686 21.7314 12 21.4 12H21H3ZM3 12V2.6C3 2.26863 3.26863 2 3.6 2H20.4C20.7314 2 21 2.26863 21 2.6V12H3Z"
      fill="none"
      stroke={color as string}
      strokeWidth="1.5"
    />
  </Icon>
)

export default PublicAuditIcon
