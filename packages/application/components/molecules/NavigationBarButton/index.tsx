import { Button } from 'native-base'

interface INavigationBarButtonProps {
  onPress?: () => void
  title: string
  isActive: boolean
}

const NavigationBarButton = ({
  onPress,
  title,
  isActive = false,
}: INavigationBarButtonProps) => {
  const handlePressButton = () => {
    if (onPress) onPress()
  }

  return (
    <Button
      variant={isActive ? "menuLinkActive" : "menuLink"}
      h="30px"
      borderRadius={0}
      onPress={handlePressButton}
      mx={4}
      px={0}
      py={0}
    >
      {title}
    </Button>
  )
}

export default NavigationBarButton
