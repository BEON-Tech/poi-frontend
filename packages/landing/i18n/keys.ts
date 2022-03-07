const keys = {
  toolbar: {
    about: 'about',
    assitanceProgram: 'assitanceProgram',
    ourTeam: 'ourTeam',
    publicAudit: 'publicAudit',
    goToApp: 'goToApp',
  },
  introSection: {
    title: 'title',
    subTitle: {
      firstSection: 'firstSection',
      secondSection: 'secondSection',
    },
    donateCTA: 'donateCTA',
  },
  banner: {
    title: 'title',
    bubble1: 'bubble1',
    bubble2: 'bubble2',
    descriptionItem1: 'descriptionItem1',
    descriptionItem2: 'descriptionItem2',
    descriptionItem3: 'descriptionItem3',
  },
  aboutPOI: {
    upperTittle: 'upperTittle',
    tittle: 'tittle',
    descriptionFirstParagraph: 'descriptionFirstParagraph',
    descriptionSecondParagraph: 'descriptionSecondParagraph',
    descriptionThirdParagraph: 'descriptionThirdParagraph',
  },
  assistanceProgram: {
    title: 'title',
    firstBox: {
      firstSentence: 'firstSentence',
      secondSentenceBold: 'secondSentenceBold',
      thirdSentence: 'thirdSentence',
    },
    secondBox: {
      title: 'title',
      button: 'button',
    },
    aimBox: {
      title: 'title',
      firstItem: 'firstItem',
      secondItem: 'secondItem',
      thirdItem: 'thirdItem',
    },
  },
  publicAudit: {
    title: 'title',
    certificationsTable: {
      title: 'title',
      applicantColumn: 'applicantColumn',
      dateColumn: 'dateColumn',
      detailsColumn: 'detailsColumn',
      moreDetails: 'moreDetails',
      seeMore: 'seeMore',
    },
    donationsTable: {
      title: 'title',
      amountColumn: 'amountColumn',
      typeColumn: 'typeColumn',
      etherscanColumn: 'etherscanColumn',
      moreDetails: 'moreDetails',
      seeMore: 'seeMore',
    },
  },
  ourTeam: {
    title: 'title',
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
      srSolidityDeveloper: 'SrSolidityDeveloper',
      uxuiDesigner: 'uxuiDesigner',
      productManager: 'productManager',
      copywriter: 'copywriter',
      marketingSpecialist: 'marketingSpecialist',
      socialMedia: 'socialMedia',
      socialTeam: 'socialTeam',
      fundraisingStrategy: 'fundraisingStrategy',
    },
    meetTheAdvisors: 'meetTheAdvisors',
  },
  advisors: {
    title: 'title',
    hideAdvisors: 'hideAdvisors',
    roles: {
      productAdvisor: 'productAdvisor',
      strategyAdvisor: 'strategyAdvisor',
      techAdvisor: 'techAdvisor',
      cryptoAdvisor: 'cryptoAdvisor',
      legalAdvisor: 'legaldvisor',
    },
    descriptions: {
      damianWasserman: 'damianWasserman',
      juanHeado: 'juanHeado',
      pabloSabbatella: 'pabloSabbatella',
      brianSztamfater: 'brianSztamfater',
      diegoBoryszanski: 'diegoBoryszanski',
    },
  },
  whyUS: {
    title: 'title',
    button: 'button',
  },
  footer: {
    title: 'title',
    subtitle: 'subtitle',
    disclaimer: 'disclaimer',
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
  { name: 'English', lang: 'en' },
  { name: 'Español', lang: 'es' },
]

export default expandedKeys(keys) as typeof keys
