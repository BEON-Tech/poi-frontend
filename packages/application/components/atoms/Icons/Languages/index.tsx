import ENFlag from './English.LanguageIcon'
import ESFlag from './Spanish.LanguageIcon'

const Flag = (iconName: string, size: number = 6) => {
  switch (iconName) {
    case 'es':
      return ESFlag(size)
    case 'en':
    default:
      return ENFlag(size)
  }
}

export default Flag
