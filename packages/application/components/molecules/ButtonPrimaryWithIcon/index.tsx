import { Button, Icon } from 'native-base'

const ButonPrimaryWithIcon = ({ children, icon }: any) => (
  <Button
    bg="greenColor.900"
    leftIcon={<Icon as={icon} size="sm" />}
    w="250"
    _text={{ fontWeight: 'bold', fontSize: 'lg' }}
    _hover={{ bg: 'greenColor.800' }}
    _pressed={{ bg: 'greenColor.700' }}
    _focus={{ bg: 'greenColor.900' }}
  >
    {children}
  </Button>
)

export default ButonPrimaryWithIcon
