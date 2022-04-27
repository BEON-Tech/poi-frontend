import { useBreakpointValue } from 'native-base'
import React, { useEffect } from 'react'
import { BreakpointContext } from '../components/context'

const ClientBreakpointProvider: React.FC = ({ children }) => {
  // const { changeTheme } = useThemeValue()
  const breakpoints = useBreakpointValue({
    base: {
      isMobile: true,
      isTablet: false,
      isDesktop: false,
      isBigDesktop: false,
    },
    sm: {
      isMobile: false,
      isTablet: true,
      isDesktop: false,
      isBigDesktop: false,
    },
    lg: {
      isMobile: false,
      isTablet: false,
      isDesktop: true,
      isBigDesktop: false,
    },
    xl: {
      isMobile: false,
      isTablet: false,
      isDesktop: true,
      isBigDesktop: true,
    },
  })

  useEffect(() => {
    /* if (breakpoints.isDesktop) {
        changeTheme(webTheme)
      } else {
        changeTheme(mobileTheme)
      } */
  }, [breakpoints.isMobile, breakpoints.isTablet, breakpoints.isDesktop])

  return (
    <BreakpointContext.Provider value={breakpoints}>
      {children}
    </BreakpointContext.Provider>
  )
}

const BreakpointProvider = (props: any) => {
  if (typeof window === 'undefined') return null
  return <ClientBreakpointProvider {...props} />
}

export default BreakpointProvider
