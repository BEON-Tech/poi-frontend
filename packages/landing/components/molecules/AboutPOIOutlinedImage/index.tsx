import { HStack, View } from 'native-base'

import { Images } from '@components/atoms'
import { IHStackProps } from 'native-base/lib/typescript/components/primitives/Stack/HStack'

export interface IAboutPOIOutlinedImageProps extends IHStackProps {
  center?: boolean
}

const AboutPOIOutlinedImage = ({
  center,
  ...props
}: IAboutPOIOutlinedImageProps) => (
  <HStack
    {...(center ? { justifyContent: 'center' } : {})}
    flex="1"
    position="relative"
    pl={{ base: 0, lg: '80px' }}
    {...props}
  >
    <View
      position="absolute"
      w={{ base: '266px', lg: '351px', xl: '520px' }}
      h={{ base: '360px', lg: '488px', xl: '649px' }}
      borderTopRadius={{ base: '274px', lg: '315px' }}
      borderBottomRadius={{ base: '20px', lg: '50px' }}
      ml={{ base: '53px', lg: '80px', xl: '104px' }}
      borderWidth="1px"
      borderColor="#F2EAE3"
    />
    <View
      pt={{ base: '36px', lg: '72px' }}
      w={{ base: '286px', lg: '408px', xl: '557px' }}
      h={{ base: '455px', lg: '657px', xl: '858px' }}
      borderTopRadius="315px"
      borderBottomRadius="50px"
      overflow="hidden"
    >
      <Images.PersonLeftAboutPOISection width="100%" height="100%" />
    </View>
  </HStack>
)

export default AboutPOIOutlinedImage
