import { default as InputThemeDefinition } from './input'

const defaultProps = {
  ...InputThemeDefinition.defaultProps,
  fontSize: 'md',
  variant: 'unstyled',
  color: 'text.50',
}

export default {
  baseStyle: InputThemeDefinition.baseStyle,
  defaultProps,
  variants: InputThemeDefinition.variants,
  sizes: InputThemeDefinition.sizes,
}
