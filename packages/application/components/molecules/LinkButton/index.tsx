import { Button } from 'native-base'

const LinkButton = ({ children }: any) => (
  <Button
    variant="link"
    _text={{ fontSize: 'lg', color: 'greenColor.900' }}
    _hover={{ _text: { color: 'greenColor.800' } }}
  >
    {children}
  </Button>
)

export default LinkButton
