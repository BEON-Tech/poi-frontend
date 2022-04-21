import { FC } from 'react'
import { Button, Text, IIconProps } from 'native-base'

interface INavigationBarButtonMobileProps {
  onPress: () => void
  title: string
  Icon?: FC<IIconProps>
  isActive?: boolean
}

const NavigationBarButtonMobile = ({
  onPress,
  title,
  Icon,
  isActive = false,
}: INavigationBarButtonMobileProps) => (
  <Button borderRadius={0} onPress={onPress} bg="white">
    {Icon && <Icon color={isActive ? '#AB124f' : 'black'} />}
    <Text color="black" fontSize={12}>
      {title}
    </Text>
  </Button>
)

export default NavigationBarButtonMobile
