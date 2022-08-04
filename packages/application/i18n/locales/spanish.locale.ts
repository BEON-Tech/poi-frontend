import type { LanguageKeys } from '../keys'

const keys: LanguageKeys = {
  language: 'es',
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
    title: 'Necesitamos tu ayuda',
    subtitle:
      'Con tu donación podemos acercar la tecnología blockchain a más personas.',
  },
  donate: {
    label: 'Ingrese monto',
    placeholder: 'Monto',
    transactionErrorTitle: 'Error de Transacción',
    transactionErrorDescription:
      'Hubo un problema con la transacción. Verifica tus fondos y vuelva a intentarlo.',
    invalidNetworkTitle: 'Cambia la red',
    invalidNetworkDescription:
      'Por favor, asegúrate de estar conectado a la Red Ethereum.',
    metamask: 'Metamask',
    connectWallet: 'Conectar Wallet',
    disconnect: 'Desconectar',
    donate: 'Donar',
    pleaseInstallMetamaskShort: 'Por favor, instala la extensión de MetaMask',
    pleaseInstallMetamask:
      'Por favor, instala la extensión de MetaMask para conectar tu wallet.',
  },
  thankYou: {
    thankYou: 'Gracias!',
    moreDetails: 'Más Detalles',
    youContributed: 'Has contribuido',
    toOurPool: 'a nuestra pool.',
    weAreHappy:
      'Estamos muy felices de ser tus socios en la lucha contra la pobreza.',
    continueHelping: 'Continuar ayudando',
    goBackToHome: 'Volver a la Home',
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
    humansInNeed:
      'Con tu ayuda podemos acercar la tecnología blockchain a más personas.',
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
