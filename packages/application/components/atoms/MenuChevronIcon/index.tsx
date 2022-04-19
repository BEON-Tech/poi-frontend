import { ChevronUpIcon, ChevronDownIcon } from 'native-base'

const MenuChevronIcon = (size: number, isMenuOpen: boolean) => {
  if (isMenuOpen) {
    return (
      <ChevronUpIcon
        width="auto"
        size={size}
        color="#2D6320"
        justifySelf="flex-end"
      />
    )
  }

  return (
    <ChevronDownIcon
      width="auto"
      size={size}
      color="#2D6320"
      justifySelf="flex-end"
    />
  )
}

export default MenuChevronIcon
