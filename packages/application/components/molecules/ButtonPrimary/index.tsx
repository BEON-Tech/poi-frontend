import { Button } from 'native-base'

const ButtonPrimary = ({ children, icon, withIcon, width, large }: any) => (
  <Button
    bg="greenColor.900"
    leftIcon={withIcon ? icon : null}
    w={width}
    py={large ? 7 : 5}
    _text={{ fontWeight: '700', fontSize: `${large ? '2xl' : 'md'}` }}
    _hover={{ bg: 'greenColor.800' }}
    _pressed={{ bg: 'greenColor.700' }}
    _focus={{ bg: 'greenColor.900' }}
  >
    {children}
  </Button>
)

export default ButtonPrimary
