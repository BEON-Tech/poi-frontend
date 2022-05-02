import { Icon } from 'native-base'
import type { IIconProps } from 'native-base'
import { Path } from 'react-native-svg'

const DonateIcon = ({ color = 'greenColor.600', size = "3xl", ...props }: IIconProps) => (
  <Icon size={size} viewBox="0 0 24 24" {...props}>
    <Path
      d="M16 6.27975C16 6.88118 15.7625 7.45883 15.3383 7.88611C14.3619 8.87007 13.415 9.89605 12.4021 10.8443C12.17 11.0585 11.8017 11.0507 11.5795 10.8268L8.6615 7.88611C7.7795 6.99725 7.7795 5.56225 8.6615 4.67339C9.55218 3.77579 11.0032 3.77579 11.8938 4.67339L11.9999 4.78027L12.1059 4.67345C12.533 4.24286 13.1146 4 13.7221 4C14.3297 4 14.9113 4.24284 15.3383 4.67339C15.7625 5.10073 16 5.67835 16 6.27975Z"
      fill="none"
      stroke={color as string}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <Path
      d="M18 20L21.8243 16.1757C21.9368 16.0632 22 15.9106 22 15.7515V10.5C22 9.67157 21.3284 9 20.5 9C19.6716 9 19 9.67157 19 10.5V15"
      fill="none"
      stroke={color as string}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18 16.0001L18.8581 15.142C18.949 15.0511 19 14.9279 19 14.7995C19 14.616 18.8963 14.4483 18.7322 14.3662L18.2893 14.1448C17.5194 13.7598 16.5894 13.9107 15.9807 14.5194L15.0858 15.4143C14.7107 15.7894 14.5 16.2981 14.5 16.8285V20.0001"
      fill="none"
      stroke={color as string}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6 20L2.17574 16.1757C2.06321 16.0632 2 15.9106 2 15.7515V10.5C2 9.67157 2.67157 9 3.5 9C4.32843 9 5 9.67157 5 10.5V15"
      fill="none"
      stroke={color as string}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6 16.0001L5.14187 15.142C5.05103 15.0511 5 14.9279 5 14.7995C5 14.616 5.10366 14.4483 5.26776 14.3662L5.71067 14.1448C6.48064 13.7598 7.41059 13.9107 8.01931 14.5194L8.91421 15.4143C9.28929 15.7894 9.5 16.2981 9.5 16.8285V20.0001"
      fill="none"
      stroke={color as string}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
)

export default DonateIcon
