import { useBreakpointValue } from 'native-base'
import React, { createContext, useEffect } from 'react'
import { useThemeValue } from '@hooks'
import { webTheme, mobileTheme } from '@theme'

interface IBreakpointContextValue {
  isMobile?: boolean
  isTablet?: boolean
  isDesktop?: boolean
}

const DEFAULT_VALUE: IBreakpointContextValue = {
  isMobile: false,
  isTablet: false,
  isDesktop: true,
}

const BreakpointContext = createContext<IBreakpointContextValue>(DEFAULT_VALUE)

const ClientBreakpointProvider: React.FC = ({ children }) => {
  const { changeTheme } = useThemeValue()
  const breakpoints = useBreakpointValue({
    base: { isMobile: true, isTablet: false, isDesktop: false },
    sm: { isMobile: false, isTablet: true, isDesktop: false },
    lg: { isMobile: false, isTablet: false, isDesktop: true },
  })

  useEffect(() => {
    if (breakpoints.isDesktop) {
      changeTheme(webTheme)
    } else {
      changeTheme(mobileTheme)
    }
  }, [breakpoints.isMobile, breakpoints.isTablet, breakpoints.isDesktop])

  return (
    <BreakpointContext.Provider value={breakpoints}>
      {children}
    </BreakpointContext.Provider>
  )
}

export const BreakpointProvider = (props: any) => {
  if (typeof window === 'undefined') return null
  return <ClientBreakpointProvider {...props} />
}

export default BreakpointContext
