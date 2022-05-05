import { FC, useState } from 'react'
import { Button, Text, IIconProps } from 'native-base'

interface INavigationBarButtonMobileProps {
  onPress: () => void
  title: string
  Icon?: FC<IIconProps>
  isActive?: boolean
  isDisabled: boolean
  width?: any
}

const NavigationBarButtonMobile = ({
  onPress,
  title,
  Icon,
  isActive = false,
  isDisabled = false,
  width
}: INavigationBarButtonMobileProps) => {
  const [isPressed, setPressed] = useState(false)
  const showActive = isActive || isPressed
  return (
    <Button
      w={width}
      borderRadius={0}
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      backgroundColor="white"
      borderTopColor="orangeColor.900"
      borderTopWidth={showActive ? '1px' : 0}
      pb={12}
      pt={10}
      isDisabled={isDisabled}
    >
      {Icon && (
        <Icon
          color={showActive ? 'orangeColor.900' : 'greenColor.600'}
          size={7}
          alignSelf="center"
          mb={2}
        />
      )}
      <Text color="greenColor.600" fontSize={12} bold={showActive} alignSelf="center">
        {title}
      </Text>
    </Button>
  )
}

export default NavigationBarButtonMobile
