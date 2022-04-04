import { useBreakpointValue } from 'native-base'
import React, { createContext, useContext } from 'react'

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

export const useBreakpoint = () => useContext(BreakpointContext)

const ClientBreakpointProvider: React.FC = ({ children }) => {
  const breakpoints = useBreakpointValue({
    base: { isMobile: true, isTablet: false, isDesktop: false },
    sm: { isMobile: false, isTablet: true, isDesktop: false },
    lg: { isMobile: false, isTablet: false, isDesktop: true },
  })

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
