import { ICustomTheme } from 'native-base'
// import {
//   ButtonThemeDefinition,
//   InputThemeDefinition,
//   SelectThemeDefinition,
// } from './Components'

export const fontSizes = {
  '2xs': 8,
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 30,
  '2xl': 38,
  '3xl': 50,
  '4xl': 56,
  '5xl': 70,
  '6xl': 80,
  '7xl': 90,
}

const fontFamily = 'Hauora'

export default {
  components: {
    // Select: SelectThemeDefinition,
    // Input: InputThemeDefinition,
    // Button: ButtonThemeDefinition,
    Modal: {
      defaultProps: {
        overlayVisible: true,
        backdropVisible: true,
        closeOnOverlayClick: false,
        _backdrop: { bg: 'background.600', opacity: 0.65 },
      },
    },
    Text: {
      baseStyle: {
        padding: 0,
        margin: 0,
        _disabled: {
          color: 'general.500',
        },
      },
      defaultProps: {
        fontSize: 'lg',
        fontFamily,
        fontVariant: 'normal',
        lineHeight: '30px',
        color: 'general.900',
      },
      variants: {},
      sizes: {},
    },
    Heading: {
      baseStyle: {},
      defaultProps: {
        fontFamily,
        color: 'general.900',
      },
      variants: {},
      sizes: {
        lg: {
          fontSize: 'lg',
        },
        xl: {
          fontSize: 'xl',
        },
        '2xl': {
          fontSize: '2xl',
        },
        '3xl': {
          fontSize: '3xl',
        },
        '4xl': {
          fontSize: '4xl',
        },
        '5xl': {
          fontSize: '5xl',
        },
        '6xl': {
          fontSize: '6xl',
        },
        '7xl': {
          fontSize: '7xl',
        },
        '8xl': {
          fontSize: '8xl',
        },
      },
    },
    Divider: {
      baseStyle: {},
      defaultProps: {
        bg: 'background.600',
      },
      variants: {},
      sizes: {},
    },
    FormControlLabel: {
      baseStyle: {
        opacity: 1,
        _text: {
          fontFamily,
          fontWeight: '700',
          letterSpacing: 1.2,
          fontSize: 12,
        },
      },
      defaultProps: {},
      variants: {},
      sizes: {},
    },
  },
  fontSizes,
  fontConfig: {
    Hauora: {
      200: {
        normal: fontFamily,
      },
      300: {
        normal: fontFamily,
      },
      400: {
        normal: fontFamily,
      },
      500: {
        normal: fontFamily,
      },
      600: {
        normal: fontFamily,
      },
      700: {
        normal: fontFamily,
      },
      800: {
        normal: fontFamily,
      },
    },
  },
  fonts: {
    heading: fontFamily,
    body: fontFamily,
    mono: fontFamily,
  },
  colors: {
    primary: {
      900: '#172815',
      800: '#223D1F',
      700: '#2D6320',
      600: '#33A117',
      500: '#2D6320',
      400: '#EAFFE4',
    },
    general: {
      900: '#000000',
      800: '#2D2D2D',
      500: '#D0D0D0',
      400: '#1F1939',
      300: '#C4C4C4',
      // 200: '#AFAFAF',
      100: '#F2E4E3',
      50: '#FFFFFF',
    },
  },
} as ICustomTheme
