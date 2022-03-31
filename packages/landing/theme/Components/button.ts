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
  const borderColor = `${c}.400`
  return {
    ...variantGhost(props),
    borderRadius: '3000px',
    borderWidth: 1,
    borderColor: props.isDisabled ? disabledStrokeColor : borderColor,
    _hover: {
      bg: 'general.50',
      borderColor,
      color: borderColor,
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
    maxW: '200px',
    w: '100%',
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
    _disabled: { bg: disabledBackgroundColor },
    _text: {
      color: 'general.50',
      fontSize: 'lg',
      fontWeight: 'regular',
    },
  }

  return styleObject
}

function variantLink(props: any) {
  const colorLink = 'general.900'
  const _hover = {
    _text: {
      color: colorLink,
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
      _text: {
        color: colorLink,
      },
    },
  }
}

function variantUnstyled() {
  return {}
}

const variants = {
  ghost: variantGhost,
  outline: variantOutline,
  solid: variantSolid,
  link: variantLink,
  unstyled: variantUnstyled,
}

export default {
  baseStyle,
  variants,
  sizes: {},
  defaultProps: {
    h: 50,
    fontWeight: 'semibold',
    colorScheme: 'primary',
    variant: 'solid',
    _text: {
      fontSize: '18px',
    },
  },
}
