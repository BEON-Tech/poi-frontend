import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useTermsAndAgreements } from '../../hooks/components'

const isAlpha = true

const withAlpha = (WrappedComponent: any) => (props: any) => {
  const router = useRouter()
  const { isAccepted } = useTermsAndAgreements()

  useEffect(() => {
    if (!isAccepted && isAlpha) {
      const params = { redirect: router.pathname }
      router.push({ pathname: '/terms', query: params })
    }
  }, [isAccepted, isAlpha])

  return !isAccepted && isAlpha ? null : <WrappedComponent {...props} />
}

export default withAlpha
