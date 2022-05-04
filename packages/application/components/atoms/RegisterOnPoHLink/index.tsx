import { ITextProps, Text } from 'native-base'

export interface RegisterOnPoHLinkProps extends ITextProps {}

const onPress = () => {
  window.open(`https://app-kovan.poh.dev/`, '_blank')
}

const RegisterOnPoHLink = (props: RegisterOnPoHLinkProps) => (
  <Text mt={10} textAlign="center" {...props}>
    Register on{' '}
    <Text color="primary.700" onPress={onPress}>
      Proof Of Humanity
    </Text>{' '}
    first to donate your UBI&apos;s.
  </Text>
)

export default RegisterOnPoHLink
