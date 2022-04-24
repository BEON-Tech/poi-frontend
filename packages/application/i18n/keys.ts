const rawKeys = {
  general: {
    disconnectCTA: 'disconnectCTA',
    connectCTA: 'connectCTA',
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
