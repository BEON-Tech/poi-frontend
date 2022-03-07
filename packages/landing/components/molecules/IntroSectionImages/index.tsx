import { View, VStack } from 'native-base'
import { Images } from '@components/atoms'

const IntroPeopleImage = () => (
  <VStack flex="1" pl="33px">
    <View
      position="absolute"
      top="196px"
      right="80px"
      width="200px"
      height="200px"
      overflow="hidden"
    >
      <Images.PersonTopIntroSection width="200px" height="200px" />
    </View>
    <View
      position="absolute"
      w="431px"
      h="616px"
      borderTopRadius="274px"
      borderBottomRadius="50px"
      top="238px"
      borderWidth="1px"
      borderColor="#F2EAE3"
    />
    <View
      position="absolute"
      top="268px"
      left="63px"
      width="412px"
      height="550px"
      borderTopRadius="315px"
      borderBottomRadius="50px"
      overflow="hidden"
    >
      <Images.PeopleCenterIntroSection width="412px" height="582px" />
    </View>

    <View
      position="absolute"
      top="656px"
      right="-49px"
      width="305px"
      height="405pxx"
      overflow="hidden"
    >
      <Images.PeopleBottomIntroSection width="305px" height="305px" />
    </View>
  </VStack>
)

export default IntroPeopleImage
