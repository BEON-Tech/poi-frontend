import keys from '@i18n/keys'
import {
  DEVELOPER_TAG,
  DESIGN_AND_MARKETING_TAG,
  SOCIAL_TEAM_TAG,
} from '@constants'

import MichelCohenImage from '@assets/images/michel_cohen.png'
import DavidMazzitelliImage from '@assets/images/david_mazzitelli.png'
import LucianoBraccoImage from '@assets/images/luciano_bracco.png'
import NicolasAyalaImage from '@assets/images/nicolas_ayala.png'
import CarolinaGhisolfiImage from '@assets/images/carolina_ghisolfi.png'
import BelenFernandezImage from '@assets/images/belen_fernandez.png'
import AlbaFuentesImage from '@assets/images/alba_fuentes.png'
import NicolasManziniImage from '@assets/images/nicolas_manzini.png'
import MicaelaGarciaImage from '@assets/images/micaela_garcia.png'
import BarbaraFernandezImage from '@assets/images/barbara_fernandez.png'
import CelinaGrauBaenaImage from '@assets/images/celina_grau_baena.png'
import DiegoGilImage from '@assets/images/diego_gil.png'
import JuanCruzGurruchagaImage from '@assets/images/juan_cruz_gurruchaga.png'
import POILogoFiller from '@assets/images/our_team__poi_logo_table_filler.png'
import ColorFiller1 from '@assets/images/our_team__colors_1_table_filler.png'
import ColorFiller2 from '@assets/images/our_team__colors_2_table_filler.png'

import { ICard, IPerson, TagsType } from '@constants/types'

interface IFilter {
  label: string
  filterKey?: TagsType
}

export const FILTERS: IFilter[] = [
  {
    label: keys.ourTeam.tags.all,
  },
  {
    label: keys.ourTeam.tags.developers,
    filterKey: DEVELOPER_TAG,
  },
  {
    label: keys.ourTeam.tags.designAndMarketing,
    filterKey: DESIGN_AND_MARKETING_TAG,
  },
  {
    label: keys.ourTeam.tags.socialTeam,
    filterKey: SOCIAL_TEAM_TAG,
  },
]

export const LIST_ITEMS: (IPerson | ICard)[] = [
  {
    imagePath: MichelCohenImage,
    name: 'Michel Cohen',
    role: keys.ourTeam.roles.founderAndDirector,
    tags: [DEVELOPER_TAG, SOCIAL_TEAM_TAG, DESIGN_AND_MARKETING_TAG],
  },
  {
    imagePath: DavidMazzitelliImage,
    name: 'David Mazzitelli',
    role: keys.ourTeam.roles.leadSolidityDeveloper,
    tags: [DEVELOPER_TAG],
  },
  {
    imagePath: LucianoBraccoImage,
    name: 'Luciano Bracco',
    role: keys.ourTeam.roles.leadFrontendDeveloper,
    tags: [DEVELOPER_TAG],
  },
  {
    imagePath: NicolasAyalaImage,
    name: 'Nicolas Ayala',
    role: keys.ourTeam.roles.srSolidityDeveloper,
    tags: [DEVELOPER_TAG],
  },
  {
    imagePath: CarolinaGhisolfiImage,
    name: 'Carolina Ghisolfi',
    role: keys.ourTeam.roles.uxuiDesigner,
    tags: [DESIGN_AND_MARKETING_TAG],
  },
  {
    imagePath: BelenFernandezImage,
    name: 'Belen Fernandez',
    role: keys.ourTeam.roles.productManager,
    tags: [DESIGN_AND_MARKETING_TAG],
  },
  {
    name: 'POILogoFiller',
    imagePath: POILogoFiller,
  },
  {
    name: 'ColorFiller1',
    imagePath: ColorFiller1,
  },
  {
    imagePath: AlbaFuentesImage,
    name: 'Alba Fuentes',
    role: keys.ourTeam.roles.copywriter,
    tags: [DESIGN_AND_MARKETING_TAG],
  },
  {
    imagePath: NicolasManziniImage,
    name: 'Nicolas Manzini',
    role: keys.ourTeam.roles.marketingSpecialist,
    tags: [DESIGN_AND_MARKETING_TAG],
  },
  {
    imagePath: MicaelaGarciaImage,
    name: 'Micaela García',
    role: keys.ourTeam.roles.socialMedia,
    tags: [DESIGN_AND_MARKETING_TAG],
  },
  {
    name: 'ColorFiller2',
    imagePath: ColorFiller2,
  },
  {
    imagePath: BarbaraFernandezImage,
    name: 'Barara Fernandez',
    role: keys.ourTeam.roles.socialTeam,
    tags: [SOCIAL_TEAM_TAG],
  },
  {
    imagePath: CelinaGrauBaenaImage,
    name: 'Celina Grau Baena',
    role: keys.ourTeam.roles.socialTeam,
    tags: [SOCIAL_TEAM_TAG],
  },
  {
    imagePath: DiegoGilImage,
    name: 'Diego Gil',
    role: keys.ourTeam.roles.socialTeam,
    tags: [SOCIAL_TEAM_TAG],
  },
  {
    imagePath: JuanCruzGurruchagaImage,
    name: 'Juan Cruz Gurruchaga',
    role: keys.ourTeam.roles.fundraisingStrategy,
    tags: [SOCIAL_TEAM_TAG],
  },
]
