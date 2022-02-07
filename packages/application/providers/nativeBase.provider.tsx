import { FC } from 'react'
import { NativeBaseProvider } from 'native-base'

import { lightTheme } from '../themes'

const Provider: FC = ({ children }) => (
  <NativeBaseProvider theme={lightTheme}>{children}</NativeBaseProvider>
)

export default Provider
