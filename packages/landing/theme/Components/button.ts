/* eslint-disable no-underscore-dangle */
import { mode, transparentize } from 'native-base/lib/commonjs/theme/tools'

const colorSchemeDefault = ({ colorScheme: c }: any) => `${c}.500`

const disabledBackgroundColor = 'background.700'
const disabledStrokeColor = 'background.700'
const disabledTextColor = 'background.500'

const loadingCursor = (props: any) => (props.isLoading ? 'default' : 'pointer')

const baseStyle = (props: any) => ({
  borderRadius: 'sm',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  maxH: '50px',
  _web: {
    cursor: props.isDisabled ? 'not-allowed' : loadingCursor(props),
  },
  _text: {
    fontWeight: 'medium',
  },
  _loading: {
    opacity: '80',
  },
  _disabled: {
    opacity: '50',
  },
  _spinner: {
    size: 'sm',
  },
})

function variantGhost(props: any) {
  const { colorScheme: c } = props
  return {
    _text: {
      color: props.isDisabled ? disabledTextColor : 'general.50',
    },
    bg: 'transparent',
    margin: 0,
    padding: 0,
    _web: {
      outlineWidth: '0',
    },
    _hover: {
      borderColor: colorSchemeDefault(props),
      bg: transparentize(mode(`${c}.200`, `${c}.400`)(props), 0.5)(props.theme),
    },
    _focusVisible: {
      borderColor: mode(`${c}.700`, `${c}.200`)(props),
      bg: transparentize(mode(`${c}.200`, `${c}.400`)(props), 0.5)(props.theme),
    },
    _pressed: {
      borderColor: mode(`${c}.600`, `${c}.200`)(props),
      bg: transparentize(mode(`${c}.300`, `${c}.500`)(props), 0.5)(props.theme),
    },
    _spinner: {
      size: 'sm',
    },
  }
}

const variantOutline = (props: any) => {
  const { colorScheme: c } = props
  const borderColor = `${c}.500`
  return {
    ...variantGhost(props),
    borderRadius: '3000px',
    borderWidth: 1,
    borderColor: props.isDisabled ? disabledStrokeColor : borderColor,
    bg: 'general.50',
    _hover: {
      borderColor,
      bg: borderColor,
      _text: {
        color: 'general.50',
      },
    },
    _loading: {
      _text: { display: 'none' },
    },
    _focus: {},
    _pressed: {
      bg: 'general.50',
      borderColor,
      color: borderColor,
    },
    _text: { color: borderColor, fontWeight: 700 },
    _disabled: {
      opacity: 0.3,
    },
  }
}

function variantSolid(props: any) {
  const { colorScheme: c } = props
  let bg = `${c}.500`
  if (props.isDisabled) {
    bg = disabledBackgroundColor
  }

  const styleObject = {
    borderRadius: '3000px',

    _web: {
      outlineWidth: '0',
    },
    bg,
    _hover: {
      bg: `${c}.600`,
    },
    _pressed: {
      bg: `${c}.700`,
    },
    _focus: {
      bg: `${c}.600`,
    },
    _loading: {
      bg: disabledBackgroundColor,
      _text: { display: 'none' },
    },
    _disabled: {
      bg: `${c}.700`,
      opacity: 0.3,
    },
    _text: {
      color: 'general.50',
      fontWeight: 'regular',
    },
  }

  return styleObject
}

function variantSolid2(props: any) {
  const { colorScheme: c } = props
  let bg = `${c}.500`
  if (props.isDisabled) {
    bg = disabledBackgroundColor
  }

  const styleObject = {
    borderRadius: '3000px',

    _web: {
      outlineWidth: '0',
    },
    bg,
    _hover: {
      bg: `${c}.600`,
    },
    _pressed: {
      bg: `${c}.700`,
    },
    _loading: {
      bg: disabledBackgroundColor,
      _text: { display: 'none' },
    },
    _disabled: {
      bg: `${c}.700`,
      opacity: 0.3,
    },
    _text: {
      color: 'general.50',
      fontWeight: 'regular',
    },
  }

  return styleObject
}

function variantLink(props: any) {
  const colorLink = 'primary.700'
  const _hover = {
    _text: {
      color: 'general.900',
      textDecorationLine: 'underline',
    },
    bg: 'transparent',
  }

  return {
    ...variantGhost(props),
    bg: 'transparent',
    _text: {
      color: props.isDisabled ? disabledTextColor : colorLink,
      textDecorationLine: 'none',
    },
    _hover,
    _focusVisible: {
      bg: 'transparent',
    },
    _pressed: _hover,
    _disabled: {
      opacity: 0.3,
      _text: {
        color: colorLink,
      },
    },
  }
}

function variantUnstyled() {
  return {}
}

function variantBrown(props: any) {
  const { colorScheme: c } = props
  let bg = '#a48c7b'
  if (props.isDisabled) {
    bg = disabledBackgroundColor
  }

  const styleObject = {
    borderRadius: '3000px',

    _web: {
      outlineWidth: '0',
    },
    bg,
    _hover: {
      bg: '#8f674a',
    },
    _pressed: {
      bg: '#6a4c36',
    },
    _loading: {
      bg: disabledBackgroundColor,
      _text: { display: 'none' },
    },
    _disabled: {
      bg: `${c}.700`,
      opacity: 0.3,
    },
    _text: {
      color: 'general.50',
      fontWeight: 'regular',
    },
  }

  return styleObject
}

const variants = {
  ghost: variantGhost,
  outline: variantOutline,
  solid: variantSolid,
  solid2: variantSolid2,
  link: variantLink,
  unstyled: variantUnstyled,
  brown: variantBrown,
}

export default {
  baseStyle,
  variants,
  sizes: {},
  defaultProps: {
    maxWidth: '250px',
    w: '100%',
    h: 50,
    fontWeight: 'semibold',
    colorScheme: 'primary',
    variant: 'solid',
    _text: {
      fontSize: 'lg',
    },
  },
}
