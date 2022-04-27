const keys = {
  main: {
    poi: "poi"
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
    disconnect: 'disconnect'
  }
}

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

export const Languages = [
  { lang: 'en', iconName: 'EnglishFlag' },
  { lang: 'es', iconName: 'SpanishFlag' },
]

const expandedKeysObject = expandedKeys(keys) as typeof keys

export default expandedKeysObject
