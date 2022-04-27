import { extendTheme } from 'native-base'

const fontFamily = 'Roboto'

const lightTheme = extendTheme({
  components: {
    KeyboardAvoidingView: {
      baseStyle: {
        flex: 1,
      },
      defaultProps: {
        bg: 'background.900',
        _ios: {
          keyboardVerticalOffset: 80,
          behavior: 'padding',
        },
      },
      variants: {},
      sizes: {},
    },
    Text: {
      baseStyle: {
        padding: 0,
        margin: 0,
      },
      defaultProps: {
        fontSize: 'md',
        // fontSize: { base: 'sm', xs: 'sm', md: 'md', lg: 'md', xl: 'md' },
        fontFamily,
        fontVariant: 'normal',
      },
      variants: {},
      sizes: {},
    },
    Heading: {
      baseStyle: {},
      defaultProps: {
        color: 'primary.900',
        textAlign: 'center',
        fontWeight: 700,
        // fontSize: '7xl',
        // fontSize: {
        //   base: '3xl',
        //   sm: '3xl',
        //   md: '5xl',
        //   lg: '7xl',
        //   xl: '7xl',
        // },
      },
      variants: {},
      sizes: {},
    },
    Select: {
      baseStyle: {
        padding: 0,
        margin: 0,
        height: 10,
        p: 2,
      },
      defaultProps: {
        fontSize: 'md',
        variant: 'unstyled',
      },
      variants: {},
      sizes: {},
    },
    Input: {
      baseStyle: {},
      defaultProps: {
        fontFamily,
        bg: 'background.700',
        borderWidth: 1,
        borderColor: 'border.500',
        variant: 'unstyled',
        borderRadius: 20,
        fontSize: 'md',
        _focus: { borderColor: 'border.500' },
      },
      variants: {},
      sizes: {},
    },
    TextArea: {
      baseStyle: {
        p: 2,
        borderRadius: 4,
        backgroundColor: 'inputBg.900',
        paddingTop: 0,
        paddingBottom: 1.5,
        paddingHorizontal: 0,
        margin: 0,
        paddingLeft: 0,
        _disabled: {
          opacity: 1,
        },
      },
      defaultProps: {
        isFullWidth: true,
        variant: 'unstyled',
        fontSize: 'md',
        _focusVisible: {},
      },
      variants: {},
      sizes: {},
    },
    FormControlLabel: {
      baseStyle: {
        opacity: 0.7,
        _text: {
          fontWeight: '700',
          letterSpacing: 1.2,
          fontSize: 12,
        },
      },
      defaultProps: {},
      variants: {},
      sizes: {},
    },
    Button: {
      baseStyle: {},
      defaultProps: {
        fontSize: 'md',
        borderRadius: 100,
        h: '10',
        _text: {
          fontSize: { base: 'sm', sm: 'sm', md: 'sm', lg: 'md', xl: 'md' },
        },
        // _pressed: { opacity: 0.5 },
      },
      variants: {
        solid: {
          bgColor: 'greenColor.900',
          _text: {
            color: 'invertedText.900',
          },
          _hover: {
            bgColor: 'greenColor.800',
          },
          _pressed: {
            bgColor: 'greenColor.700',
          },
        },
        outline: {
          border: '1px',
          borderColor: 'greenColor.900',
          bgColor: 'invertedText.900',
          _text: {
            color: 'greenColor.900',
          },
          _hover: {
            borderColor: 'greenColor.800',
            _text: {
              color: 'greenColor.800',
            },
          },
          _pressed: {
            borderColor: 'greenColor.700',
            _text: {
              color: 'greenColor.700',
            },
          },
        },
        link: {
          bgColor: 'transparent',
          _text: {
            color: 'greenColor.900',
            fontSize: 'md',
            margin: 0,
            padding: 0,
            textDecorationLine: 'none',
            fontWeight: '600',
          },
          _hover: {
            _text: {
              color: 'greenColor.800',
            },
          },
          _pressed: {
            _text: {
              color: 'greenColor.700',
            },
          },
        },
      },
    },
    Avatar: {
      baseStyle: {
        marginBottom: 2,
        _text: {
          fontSize: 16,
        },
      },
      defaultProps: {},
      variants: {},
      sizes: {},
    },
    VStack: {
      baseStyle: {},
      defaultProps: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      variants: {},
      sizes: {},
    },
    HStack: {
      baseStyle: {},
      defaultProps: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      variants: {},
      sizes: {},
    },
  },
  fontSize: {
    '2xs': 12,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 28,
    '4xl': 32,
    '5xl': 36,
    '6xl': 40,
    '7xl': 46,
    '8xl': 52,
    '9xl': 58,
  },
  fontConfig: {
    Barlow: {
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
      900: {
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
    // color scheme
    primary: {
      900: '#DE8603',
      800: '#FF9900',
      700: '#F6C944',
    },
    secondary: {
      900: '#3B876A',
    },
    border: {
      500: '#E5E5E5',
    },
    invertedText: { 900: '#FFFFFF' },
    text: { 900: '#000000', 800: '#2D2D2D', 700: '#1F1939', 600: '#333333' },
    background: {
      900: '#FFFFFF',
      700: '#F9F9F9',
      400: '#acacac',
      100: '#F2E4E3',
    },
    success: {
      900: '#009200',
    },
    error: {
      900: '#B83E26',
    },
    greenColor: {
      900: '#2D6320',
      800: '#223D1F',
      700: '#33A117',
      600: '#172815',
      500: '#EAFFE4',
    },
  },
})

export default lightTheme