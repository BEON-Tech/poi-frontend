import { useEffect, useRef, useContext } from 'react'
import { TermsAndAgreementContext } from '@providers/termsAndAgreement.provider'

export const useIsMounted = () => {
  const isMountedRef = useRef(true)

  useEffect(
    () => () => {
      isMountedRef.current = false
    },
    []
  )

  return isMountedRef.current
}

export const useTermsAndAgreements = () => useContext(TermsAndAgreementContext)
