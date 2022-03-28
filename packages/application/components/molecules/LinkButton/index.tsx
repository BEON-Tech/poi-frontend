import { Button } from 'native-base'

const LinkButton = ({ children }: any) => (
  <Button
    variant="link"
    _text={{ fontSize: 'lg', color: 'primary.900' }}
    _hover={{ _text: { color: 'primary.800' } }}
  >
    {children}
  </Button>
)

export default LinkButton
