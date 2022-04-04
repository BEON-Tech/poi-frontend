import { ICustomTheme } from 'native-base'
import { ButtonThemeDefinition } from './Components'

const fontSizes = {
  '2xs': '8px',
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '18px',
  xl: '30px',
  '2xl': '38px',
  '3xl': '50px',
  '4xl': '56px',
  '5xl': '70px',
  '6xl': '80px',
  '7xl': '90px',
}

const fontSizesMobile = {
  '2xs': '8px',
  xs: '14px',
  sm: '14px',
  md: '16px',
  lg: '16px',
  xl: '20px',
  '2xl': '26px',
  '3xl': '30px',
  '4xl': '30px',
  '5xl': '35px',
  '6xl': '40px',
  '7xl': '40px',
}

// 16

const fontFamily = 'Hauora'

export default {
  components: {
    Button: ButtonThemeDefinition,
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
        size: '4xl',
        color: 'general.900',
        fontWeight: 'semibold',
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
  fontSizes: fontSizesMobile,
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
      200: '#E1E1E1',
      100: '#F2E4E3',
      50: '#FFFFFF',
    },
  },
} as ICustomTheme
