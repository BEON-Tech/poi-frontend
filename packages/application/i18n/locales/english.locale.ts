import type { LanguageKeys } from '../keys'

const keys: LanguageKeys = {
  main: {
    poi: 'Proof Of Integrity',
  },
  navigatonBar: {
    home: 'Home',
    donate: 'Donate',
    publicAudit: 'Public Audit',
    wallet: 'Wallet',
  },
  donateHeader: {
    title: 'Help Humans in Need',
    subtitle:
      'Because urgent needs require urgent answers, we accept crypto donations.',
  },
  donate: {
    label: 'Enter amount',
    placeholder: 'Amount',
    transactionErrorTitle: 'Transaction Error',
    transactionErrorDescription:
      'There was a problem with the transaction. Check your funds and try again.',
    invalidNetworkTitle: 'Change the network',
    invalidNetworkDescription:
      'Please make sure you are connected to the Ethereum Network.',
    metamask: 'Metamask',
    connectWallet: 'Connect Wallet',
    disconnect: 'Disconnect',
    donate: 'Donate',
  },
  thankYou: {
    thankYou: 'Thank You!',
    moreDetails: 'More Details',
    youContributed: 'You contributed',
    toOurPool: 'to our pool.',
    weAreHappy: 'We are so happy to be your partner on fighting poverty.',
    continueHelping: 'Continue helping',
    goBackToHome: 'Go back to Home',
  },
  home: {
    heading: 'We certify who, you donate.',
    weLoveTo: 'We love to be your partner on changing the world.',
    humansInNeed:
      'Humans in need are waiting to be crowdfunded to join Proof of Humanity and start getting $ubi.',
    donate: 'Donate',
    withPOI: 'With POI, your donations go to the right hands.',
    whitepaper: 'Check Our Whitepaper',
  },
  footer: {
    title: 'Proof Of Integrity',
    subtitle: 'Proof Of Integrity is a nonprofit project.',
    disclaimer: 'Designed by Latin American talent at BEON Tech Studio',
  },
  publicAudit: {
    title: 'Public Audit',
    moreDetails: 'More Details',
    noDataTitle: 'Coming soon!',
    noDataText: ' Our pilot program is aimed to start on ',
    noDataDate: 'May 3rd.',
    comingSoonTitle: 'Coming soon',
    first: 'First',
    last: 'Last',
    certificationsTable: {
      title: 'Latest Certifications',
      shortTitle: 'Certifications',
      applicantColumn: 'Application',
      dateColumn: 'Date',
      detailsColumn: 'Details',
      seeMore: '+See all certifications',
    },
    donationsTable: {
      title: 'Latest Transactions',
      shortTitle: 'Transactions',
      amountColumn: 'Amount',
      typeColumn: 'Type',
      etherscanColumn: 'Details',
      dateColumn: 'Date',
      addressColumn: 'Address',
      seeMore: '+See all transactions',
      openBlockchainExplorer: 'Open in Blockchain Explorer',
    },
  },
  transactions: {
    administrativeExpenses: 'Administrative expenses',
    donation: 'Donation',
    pohFunding: 'Funding for PoH',
    certifierPayment: 'Certifier payment',
    genericTransaction: 'Transacción',
  },
}

export default keys
