import { FC, useState } from 'react'
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
}: INavigationBarButtonMobileProps) => {
  const [isPressed, setPressed] = useState(false)
  const showActive = isActive || isPressed
  return (
    <Button
      borderRadius={0}
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      backgroundColor="white"
      borderTopColor="#E7BB41"
      borderTopWidth={showActive ? '1px' : 0}
      pb={12}
      pt={10}
    >
      {Icon && (
        <Icon
          color={showActive ? '#E7BB41' : '#172815'}
          size="xl"
          alignSelf="center"
          mb={2}
        />
      )}
      <Text color="#172815" fontSize={12} bold={showActive} alignSelf="center">
        {title}
      </Text>
    </Button>
  )
}

export default NavigationBarButtonMobile
