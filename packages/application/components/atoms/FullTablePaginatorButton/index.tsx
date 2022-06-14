import { Button } from 'native-base'

interface IFullTablePaginatorButton {
  text?: string
  icon?: JSX.Element
  disabled?: boolean
  onPress: () => void
}

const FullTablePaginatorButton = ({
  text,
  icon,
  disabled = false,
  onPress,
}: IFullTablePaginatorButton) => (
  <Button
    variant="link"
    startIcon={icon}
    disabled={disabled}
    p={0}
    onPress={onPress}
    _text={{
      fontSize: 'sm',
      color: disabled ? 'general.300' : 'primary.600',
    }}
  >
    {text && text}
  </Button>
)

export default FullTablePaginatorButton
