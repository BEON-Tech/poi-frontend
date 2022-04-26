/* eslint-disable import/prefer-default-export */
import keys from '@i18n/keys'

import DamianWassermanImage from '@assets/images/damian_wasserman.png'
import PabloSabbatellaImage from '@assets/images/pablo_sabbatella.png'
import JuanHeadoImage from '@assets/images/juan_haedo.png'
import BrianSztamfaterImage from '@assets/images/brian_sztamfater.png'
import DiegoBoryszanskiImage from '@assets/images/diego_boryszanski.png'

import { IAdvisor } from '@constants/types'

export const LIST_ITEMS: IAdvisor[] = [
  {
    imagePath: DamianWassermanImage,
    name: 'Damian Wasserman',
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
    imagePath: BrianSztamfaterImage,
    name: 'Brian Sztamfater',
    role: keys.advisors.roles.cryptoAdvisor,
    littleDescription: keys.advisors.descriptions.brianSztamfater,
  },
  {
    imagePath: DiegoBoryszanskiImage,
    name: 'Diego Boryszanski',
    role: keys.advisors.roles.legalAdvisor,
    littleDescription: keys.advisors.descriptions.diegoBoryszanski,
  },
]
