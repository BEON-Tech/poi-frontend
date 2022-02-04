import { NativeBaseProvider } from 'native-base'

import { lightTheme } from '../themes'

const Provider: React.FC = ({ children }) => (
  <NativeBaseProvider theme={lightTheme}>{children}</NativeBaseProvider>
)

export default Provider
