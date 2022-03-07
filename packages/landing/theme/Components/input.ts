const unstyledStyle = () => {
  return {
    borderWidth: 1,
    borderColor: 'transparent',
    _focus: {
      borderColor: 'primary.500',
    },
    _hover: {
      borderColor: 'text.50',
    },
    _disabled: {
      bg: 'background.700',
      color: 'text.500',
    },
    _invalid: {
      borderColor: 'error.500',
    },
  }
}

const variants = {
  outline: unstyledStyle,
  underlined: unstyledStyle,
  rounded: unstyledStyle,
  filled: unstyledStyle,
  unstyled: unstyledStyle,
}

const sizes = {
  '2xl': { fontSize: '2xl', h: 16 },
  xl: { fontSize: 'xl', h: 14 },
  lg: { fontSize: 'lg', h: 13 },
  md: { fontSize: 'md', h: 12 },
  sm: { fontSize: 'sm', h: 10 },
  xs: { fontSize: 'xs', h: 8 },
}

const defaultProps = {
  isFullWidth: true,
  variant: 'unstyled',
  autoCapitalize: 'none',
  bg: 'background.600',
  fontSize: 'md',
  color: 'text.50',
  selectionColor: 'text.50',
  h: 10,
  m: 0,
  borderRadius: 4,
  px: 4,
  py: 2.5,
  _hover: {
    borderWidth: 1,
    borderColor: 'text.50',
  },
}

export default {
  baseStyle: {},
  defaultProps,
  variants,
  sizes,
}
