import { Button } from 'native-base'

interface IFullTablePageButton {
  pageNumber: number
  isActive: boolean
  onPageSelected: (page: number) => void
}

const FullTablePageButton = ({
  pageNumber,
  isActive,
  onPageSelected,
}: IFullTablePageButton) => (
  <Button
    variant="link"
    borderRadius={8}
    borderWidth={2}
    borderColor={isActive ? 'orangeColor.900' : 'transparent'}
    disabled={isActive}
    onPress={() => onPageSelected(pageNumber)}
    _text={{
      fontSize: '16',
      color: 'general.900',
      fontWeight: isActive ? 'bold' : 'normal',
    }}
  >
    {pageNumber}
  </Button>
)

export default FullTablePageButton
