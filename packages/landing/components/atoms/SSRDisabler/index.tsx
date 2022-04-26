const SSRDisabler = ({ children }: any) => {
  if (typeof window === 'undefined') return null
  return children
}

export default SSRDisabler
