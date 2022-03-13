import { Button } from 'native-base'

const ActionButton = ({ children, onPress, color, ...props }: any) => (
  <Button
    maxW={165}
    w={165}
    maxH="10"
    borderRadius={30}
    onPress={onPress}
    color="invertedText.900"
    bg={color}
    {...props}
  >
    {children}
  </Button>
)

export default ActionButton
