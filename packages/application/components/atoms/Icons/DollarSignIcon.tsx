import _ from 'lodash'
import { Icon, useTheme } from 'native-base'
import type { IIconProps } from 'native-base'
import { Path } from 'react-native-svg'

const DollarSignIcon = ({ color, ...props }: IIconProps) => {
  const { colors } = useTheme()
  const finalColor = _.get(
    colors,
    color as string,
    (colors.primary as any)['700']
  )
  return (
    <Icon size="3xl" viewBox="0 0 37 75" {...props}>
      <Path
        d="M18.0794 33.8807C40.6916 33.8807 41.8029 64.8335 21.4134 67.8788L21.5041 74.6615H14.6547L14.5639 67.7874C6.56755 66.2599 0 59.6274 0 51.0005H6.84942C6.84942 57.0912 12.3316 61.2202 18.0794 61.2202C32.8701 61.2202 32.8701 40.7808 18.0794 40.7808C-4.50041 40.7808 -5.63765 9.92266 14.6547 6.79898V0H21.5041V6.85773C29.5394 8.35266 36.1588 15.0015 36.1588 23.661H29.3093C29.3093 17.5736 23.824 13.4413 18.0794 13.4413C3.28863 13.4413 3.29187 33.8807 18.0794 33.8807V33.8807Z"
        fill={finalColor}
      />
    </Icon>
  )
}
export default DollarSignIcon
