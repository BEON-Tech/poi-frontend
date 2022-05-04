import config from '@config'

const redirectToHome = () => {
  const chunks = window.location.hostname.split('.')
  let domain = chunks.join('.')
  if (chunks.length >= 3) {
    chunks.shift()
    domain = chunks.join('.')
  }
  const url = `${window.location.protocol}//${config.homeSubdomain}.${domain}`
  window.open(url, '_self')
}

export default redirectToHome