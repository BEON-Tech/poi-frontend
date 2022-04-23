import { Button, Text } from 'native-base'
import { useState } from 'react'

interface INavigationBarButtonProps {
  onPress?: () => void
  title: string
  isActive: boolean
}

const NavigationBarButton = ({ onPress, title, isActive = false }: INavigationBarButtonProps) => {
  const handlePressButton = () => {
    if (onPress) onPress()
  }
  
  const [isHoverActive, setHoverActive] = useState(isActive)
  const updateIsHoverActive = (isHover: boolean) => {
    if(!isActive) {
      setHoverActive(isHover)
    }
  }

  return (
    <Button
      h="30px"
      borderRadius={0}
      onHoverIn={() => updateIsHoverActive(true)}
      onHoverOut={() => updateIsHoverActive(false)}
      onPress={handlePressButton}
      backgroundColor="transparent"
      mx={4}
      px={0}
      py={0}
      borderBottomColor={isHoverActive ? "#E7BB41" : "transparent"}
      borderBottomWidth="3px"
    >
      <Text color={isHoverActive ? "black" : "#2d6320"} fontSize="lg">
        {title}
      </Text>
    </Button>
  )
}

export default NavigationBarButton
