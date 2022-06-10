import { Button } from 'native-base'

interface IPublicAuditOptionButton {
  id: number
  title: string
  isActive: boolean
  onPress: (id: number) => void
}

const PublicAuditOptionButton = ({
  id,
  title,
  isActive,
  onPress,
}: IPublicAuditOptionButton) => (
  <Button
    onPress={() => onPress(id)}
    variant={isActive ? 'publicAuditOptionActive' : 'publicAuditOption'}
    borderRadius={0}
    px={8}
    py={6}
    flex={1}
  >
    {title}
  </Button>
)

export default PublicAuditOptionButton
