const rawKeys = {
  main: {
    poi: 'poi',
  },
  navigatonBar: {
    home: 'home',
    donate: 'donate',
    publicAudit: 'publicAudit',
    wallet: 'wallet',
  },
  donateHeader: {
    title: 'title',
    subtitle: 'subtitle',
  },
  donate: {
    label: 'label',
    placeholder: 'placeholder',
    transactionErrorTitle: 'transactionErrorTitle',
    transactionErrorDescription: 'transactionErrorDescription',
    invalidNetworkTitle: 'invalidNetworkTitle',
    invalidNetworkDescription: 'invalidNetworkDescription',
    metamask: 'metamask',
    connectWallet: 'connectWallet',
    disconnect: 'disconnect',
    donate: 'donate',
  },
  thankYou: {
    thankYou: 'thankYou',
    moreDetails: 'moreDetails',
    youContributed: 'youContributed',
    toOurPool: 'toOurPool',
    weAreHappy: 'weAreHappy',
    continueHelping: 'continueHelping',
    goBackToHome: 'goBackToHome',
  },
}

export type LanguageKeys = typeof rawKeys

const expandedKeys = (
  objectToExtend: any,
  prefix?: any
): Record<string, any> => {
  const result = {} as any
  Object.keys(objectToExtend).forEach((key) => {
    const isString = typeof objectToExtend[key] === 'string'
    const newValue = prefix ? `${prefix}.${key}` : key
    result[key] = isString
      ? newValue
      : expandedKeys(objectToExtend[key], newValue)
  })
  return result
}

export const keys = expandedKeys(rawKeys) as LanguageKeys
