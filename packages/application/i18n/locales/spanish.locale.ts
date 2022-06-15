import type { LanguageKeys } from '../keys'

const keys: LanguageKeys = {
  main: {
    poi: 'Proof Of Integrity',
  },
  navigatonBar: {
    home: 'Inicio',
    donate: 'Donar',
    publicAudit: 'Auditoría Pública',
    wallet: 'Billetera',
  },
  donateHeader: {
    title: 'Ayudar humanos en necesidad',
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
    heading: 'POI los certifica, tú donas.',
    weLoveTo: 'Queremos ser tus socios en cambiar al mundo.',
    humansInNeed:
      'Los humanos en necesidad están esperando ser financiados para unirse a Proof of Humanitiy y obtener $ubi.',
    donate: 'Donar',
    withPOI: 'Con POI, tus donaciones van a las manos correctas.',
    whitepaper: 'Consulta Nuestro Whitepaper',
  },
  footer: {
    title: 'Proof Of Integrity',
    subtitle: 'Proof Of Integrity es un proyecto sin fines de lucro',
    disclaimer: 'Diseñado por talento latinoamericano en BEON Tech Studio',
  },
  publicAudit: {
    title: 'Auditoría pública',
    noDataTitle: 'En breve!',
    noDataText: ' Nuestro programa piloto tiene fecha de comienzo el ',
    noDataDate: '3 de mayo.',
    moreDetails: 'Más Detalles',
    comingSoonTitle: 'En breve',
    first: 'Primera',
    last: 'Última',
    humansInNeed: 'Los humanos en necesidad están esperando tu ayuda.',
    certificationsTable: {
      title: 'Últimas Certificaciones',
      shortTitle: 'Certificaciones',
      applicantColumn: 'Aplicante',
      dateColumn: 'Fecha',
      detailsColumn: 'Detalles',
      seeMore: '+Ver todas las certificaciones',
      programColumn: 'Programa',
      placeColumn: 'Lugar',
      statusColumn: 'Estado',
      pending: 'Pendiente',
      approved: 'Aprobado',
      rejected: 'Rechazado',
    },
    donationsTable: {
      title: 'Últimas Transacciones',
      shortTitle: 'Transacciones',
      amountColumn: 'Cantidad',
      typeColumn: 'Tipo',
      etherscanColumn: 'Detalles',
      dateColumn: 'Fecha',
      addressColumn: 'Dirección',
      seeMore: '+Ver todas las transacciones',
      openBlockchainExplorer: 'Abrir en Blockchain Explorer',
    },
  },
  transactions: {
    administrativeExpenses: 'Gastos administrativos',
    donation: 'Donación',
    pohFunding: 'Fondeo para PoH',
    certifierPayment: 'Pago a certificador',
    genericTransaction: 'Transacción',
  },
}

export default keys
