import _ from 'lodash'
import { Icon } from 'native-base'
import type { IIconProps } from 'native-base'
import { Path } from 'react-native-svg'

const TwitterIcon = ({ ...props }: IIconProps) => (
  <Icon w="26" h="22" viewBox="0 0 26 22" {...props}>
    <Path
      d="M24.9168 1.2609C24.9168 1.2609 22.7308 2.55235 21.5152 2.9184C20.8627 2.1682 19.9956 1.63648 19.0311 1.39514C18.0666 1.15382 17.0513 1.21452 16.1224 1.56905C15.1936 1.92358 14.3959 2.55483 13.8376 3.37742C13.2791 4.20001 12.9868 5.17425 13.0002 6.1684V7.25173C11.0963 7.30109 9.20987 6.87886 7.50876 6.02262C5.80763 5.16639 4.34468 3.90275 3.25016 2.34423C3.25016 2.34423 -1.08317 12.0943 8.66683 16.4276C6.43574 17.942 3.77792 18.7014 1.0835 18.5943C10.8335 24.0109 22.7502 18.5943 22.7502 6.1359C22.7492 5.83413 22.7202 5.53312 22.6635 5.23673C23.7691 4.14634 24.9168 1.2609 24.9168 1.2609Z"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
    />
  </Icon>
)
export default TwitterIcon
