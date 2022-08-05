import {
  CERTIFIER_PAYMENT_TYPE,
  DONATION_TYPE,
  EXPENSE_TYPE,
  POH_FUNDING_TYPE,
} from '../constants'

const keys = {
  unclassified: {
    comingSoonTitle: 'comingSoonTitle',
  },
  toolbar: {
    about: 'about',
    assitanceProgram: 'assitanceProgram',
    ourTeam: 'ourTeam',
    publicAudit: 'publicAudit',
    goToApp: 'goToApp',
    title: 'title',
  },
  introSection: {
    title: 'title',
    subTitle: {
      firstSection: {
        first: 'first',
        second: 'second',
        third: 'third',
      },
      secondSection: {
        first: 'first',
        second: 'second',
        secondTooltip: 'secondTooltip',
        third: 'third',
      },
    },
    donateCTA: 'donateCTA',
  },
  banner: {
    title: 'title',
    bubble1: 'bubble1',
    bubble2: 'bubble2',
  },
  aboutPOI: {
    hide: 'hide',
    show: 'show',
    upperTittle: 'upperTittle',
    tittle: 'tittle',
    subtitleFirstParagraph: 'subtitleFirstParagraph',
    subtitleSecondParagraph: 'subtitleSecondParagraph',
    subtitleThirdParagraph: 'subtitleThirdParagraph',
    subtitleFourthParagraph: 'subtitleFourthParagraph',
    descriptionFirstParagraph: 'descriptionFirstParagraph',
    descriptionSecondParagraph: 'descriptionSecondParagraph',
    descriptionThirdParagraph: 'descriptionThirdParagraph',
    descriptionFourthParagraphFirst: 'descriptionFourthParagraphFirst',
    descriptionFourthParagraphBold: 'descriptionFourthParagraphBold',
    descriptionFourthParagraphSecond: 'descriptionFourthParagraphSecond',
  },
  assistanceProgram: {
    title: 'title',
    firstBox: {
      subtitle: 'subtitle',
      firstParagraph: {
        first: 'first',
        second: 'second',
        third: 'third',
        fourth: 'fourth',
      },
      secondParagraph: {
        first: 'first',
        second: 'second',
        third: 'third',
      },
      thirdParagraph: {
        first: 'first',
        second: 'second',
        third: 'third',
        fourth: 'fourth',
        tooltip: 'tooltip',
      },
    },
    secondBox: {
      title: 'title',
      button: 'button',
    },
    aimBox: {
      title: 'title',
      firstItem: 'firstItem',
      secondItem: 'secondItem',
    },
    aimSecondBox: {
      subtitle: 'subtitle',
      paragraph: {
        first: 'first',
        second: 'second',
        third: 'third',
        fourth: 'fourth',
        fifth: 'fifth',
        sixth: 'sixth',
      },
    },
  },
  publicAudit: {
    title: 'title',
    moreDetails: 'moreDetails',
    noDataTitle: 'noDataTitle',
    noDataText: 'noDataText',
    noDataDate: 'noDataDate',
    descriptionOne: 'descriptionOne',
    descriptionTwo: 'descriptionTwo',
    descriptionThree: 'descriptionThree',
    certificationsTable: {
      title: 'title',
      applicantColumn: 'applicantColumn',
      dateColumn: 'dateColumn',
      detailsColumn: 'detailsColumn',
      seeMore: 'seeMore',
    },
    donationsTable: {
      title: 'title',
      amountColumn: 'amountColumn',
      typeColumn: 'typeColumn',
      etherscanColumn: 'etherscanColumn',
      seeMore: 'seeMore',
    },
  },
  ourTeam: {
    show: 'show',
    hide: 'hide',
    title: 'title',
    description: 'description',
    tags: {
      all: 'all',
      developers: 'developers',
      designAndMarketing: 'designAndMarketing',
      socialTeam: 'socialTeam',
    },
    roles: {
      founderAndDirector: 'founderAndDirector',
      leadSolidityDeveloper: 'leadSolidityDeveloper',
      leadFrontendDeveloper: 'leadFrontendDeveloper',
      frontendDeveloper: 'frontendDeveloper',
      srSolidityDeveloper: 'SrSolidityDeveloper',
      uxuiDesigner: 'uxuiDesigner',
      productManager: 'productManager',
      copywriter: 'copywriter',
      marketingSpecialist: 'marketingSpecialist',
      socialMedia: 'socialMedia',
      socialTeam: 'socialTeam',
      fundraisingStrategy: 'fundraisingStrategy',
      institutionalRelations: 'institutionalRelations',
      communicationsTeam: 'communicationsTeam',
      territorialDevelopment: 'territorialDevelopment',
    },
    meetTheAdvisors: 'meetTheAdvisors',
  },
  advisors: {
    show: 'show',
    hide: 'hide',
    title: 'title',
    hideAdvisors: 'hideAdvisors',
    roles: {
      productAdvisor: 'productAdvisor',
      strategyAdvisor: 'strategyAdvisor',
      techAdvisor: 'techAdvisor',
      comunicationAdvisor: 'comunicationAdvisor',
    },
    descriptions: {
      damianWasserman: 'damianWasserman',
      juanHeado: 'juanHeado',
      pabloSabbatella: 'pabloSabbatella',
      oliviaGoldschmidt: 'oliviaGoldschmidt',
    },
  },
  partnersSection: {
    defyEducation: 'defyEducation',
  },
  whyUS: {
    title: 'title',
    button: 'button',
  },
  contactUS: {
    title: 'title',
    subtitle: 'subtitle',
  },
  footer: {
    title: 'title',
    subtitle: 'subtitle',
    disclaimer: 'disclaimer',
  },
  transactions: {
    administrativeExpenses: 'administrativeExpenses',
    donation: 'donation',
    pohFunding: 'pohFunding',
    certifierPayment: 'certifierPayment',
    genericTransaction: 'genericTransaction',
  },
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

export const TRANSACTION_TYPE_TO_LANGUAGE_KEY = {
  [EXPENSE_TYPE]: expandedKeysObject.transactions.administrativeExpenses,
  [DONATION_TYPE]: expandedKeysObject.transactions.donation,
  [POH_FUNDING_TYPE]: expandedKeysObject.transactions.pohFunding,
  [CERTIFIER_PAYMENT_TYPE]: expandedKeysObject.transactions.certifierPayment,
}

export default expandedKeysObject
