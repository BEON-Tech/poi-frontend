import { useState, createContext, useMemo, FC } from 'react'

interface ITermsAndAgreementContext {
  isAccepted: boolean
  acceptTerms: () => void
}

export const TermsAndAgreementContext =
  createContext<ITermsAndAgreementContext>({
    isAccepted: false,
    acceptTerms: () => {},
  })

const Provider: FC = ({ children }) => {
  const [isTermsAndAgreementAccepted, setIsTermsAndAgreementAccepted] =
    useState(false)

  const contextValue = useMemo(
    () => ({
      isAccepted: isTermsAndAgreementAccepted,
      acceptTerms: () => setIsTermsAndAgreementAccepted(true),
    }),
    [isTermsAndAgreementAccepted]
  )

  return (
    <TermsAndAgreementContext.Provider value={contextValue}>
      {children}
    </TermsAndAgreementContext.Provider>
  )
}

export default Provider
