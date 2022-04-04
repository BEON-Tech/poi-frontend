import { HStack, View } from 'native-base'

import { Images } from '@components/atoms'
import { IHStackProps } from 'native-base/lib/typescript/components/primitives/Stack/HStack'

export interface IAboutPOIOutlinedImageProps extends IHStackProps {}

const AboutPOIOutlinedImage = (props: IAboutPOIOutlinedImageProps) => (
  <HStack flex="1" position="relative" pl={{ base: 0, lg: '80px' }} {...props}>
    <View
      position="absolute"
      w={{ base: '266px', lg: '520px' }}
      h={{ base: '341px', lg: '649px' }}
      borderTopRadius={{ base: '274px', lg: '315px' }}
      borderBottomRadius={{ base: '20px', lg: '50px' }}
      ml={{ base: '53px', lg: '104px' }}
      borderWidth="1px"
      borderColor="#F2EAE3"
    />
    <View
      pt={{ base: '36px', lg: '72px' }}
      w={{ base: '286px', lg: '557px' }}
      h={{ base: '415px', lg: '788px' }}
      borderTopRadius="315px"
      borderBottomRadius="50px"
      overflow="hidden"
    >
      <Images.PersonLeftAboutPOISection width="100%" height="100%" />
    </View>
  </HStack>
)

export default AboutPOIOutlinedImage