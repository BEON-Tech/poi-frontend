import React, { createContext, useState } from 'react'

import { webTheme } from '@theme'

interface IThemeContextValue {
  theme: typeof webTheme
  changeTheme: (theme: typeof webTheme) => void
}

const ThemeContext = createContext<IThemeContextValue>({} as IThemeContextValue)

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, changeTheme] = useState(webTheme)

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { theme, changeTheme }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default ThemeContext
