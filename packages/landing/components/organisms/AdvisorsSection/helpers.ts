/* eslint-disable import/prefer-default-export */
import keys from '@i18n/keys'

import DamianWassermanImage from '@assets/images/damian_wasserman.png'
import PabloSabbatellaImage from '@assets/images/pablo_sabbatella.png'
import JuanHeadoImage from '@assets/images/juan_haedo.png'
import OliviaGoldschmidtImage from '@assets/images/olivia_goldschmidt.png'

import { IAdvisor } from '@constants/types'

export const LIST_ITEMS: IAdvisor[] = [
  {
    imagePath: DamianWassermanImage,
    name: 'Damián Wasserman',
    role: keys.advisors.roles.productAdvisor,
    littleDescription: keys.advisors.descriptions.damianWasserman,
  },
  {
    imagePath: PabloSabbatellaImage,
    name: 'Pablo Sabbatella',
    role: keys.advisors.roles.strategyAdvisor,
    littleDescription: keys.advisors.descriptions.pabloSabbatella,
  },
  {
    imagePath: JuanHeadoImage,
    name: 'Juan Haedo',
    role: keys.advisors.roles.techAdvisor,
    littleDescription: keys.advisors.descriptions.juanHeado,
  },
  {
    imagePath: OliviaGoldschmidtImage,
    name: 'Olivia Goldschmidt',
    role: keys.advisors.roles.comunicationAdvisor,
    littleDescription: keys.advisors.descriptions.oliviaGoldschmidt,
  },
]
