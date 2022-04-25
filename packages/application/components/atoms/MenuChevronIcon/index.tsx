import { ChevronUpIcon, ChevronDownIcon } from 'native-base'

interface IMenuChevronIconProps {
  size: number
  isMenuOpen: boolean
}

const MenuChevronIcon = ({size, isMenuOpen} : IMenuChevronIconProps) => {
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
