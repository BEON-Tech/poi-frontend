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
  home: {
    heading: 'heading',
    weLoveTo: 'weLoveTo',
    humansInNeed: 'humansInNeed',
    donate: 'donate',
    withPOI: 'withPOI',
    whitepaper: 'whitepaper',
  },
  footer: {
    title: 'title',
    subtitle: 'subtitle',
    disclaimer: 'disclaimer',
  },
  publicAudit: {
    title: 'title',
    moreDetails: 'moreDetails',
    noDataTitle: 'noDataTitle',
    noDataText: 'noDataText',
    noDataDate: 'noDataDate',
    comingSoonTitle: 'comingSoonTitle',
    certificationsTable: {
      title: 'title',
      shortTitle: 'shortTitle',
      applicantColumn: 'applicantColumn',
      dateColumn: 'dateColumn',
      detailsColumn: 'detailsColumn',
      seeMore: 'seeMore',
    },
    donationsTable: {
      title: 'title',
      shortTitle: 'shortTitle',
      amountColumn: 'amountColumn',
      typeColumn: 'typeColumn',
      etherscanColumn: 'etherscanColumn',
      dateColumn: 'dateColumn',
      addressColumn: 'addressColumn',
      seeMore: 'seeMore',
    },
  },
  transactions: {
    administrativeExpenses: 'administrativeExpenses',
    donation: 'donation',
    pohFunding: 'pohFunding',
    certifierPayment: 'certifierPayment',
    genericTransaction: 'genericTransaction',
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
