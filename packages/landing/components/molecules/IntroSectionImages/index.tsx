import { View, VStack } from 'native-base'
import { Images } from '@components/atoms'
import { useBreakpoint } from '@hooks'

const IntroPeopleImage = () => {
  const { isBigDesktop } = useBreakpoint()
  return (
    <VStack flex="1" pl="33px">
      {isBigDesktop && (
        <View
          position="absolute"
          zIndex="-1"
          right="50px"
          top="-40px"
          width="200px"
          height="200px"
          overflow="hidden"
        >
          <Images.PersonTopIntroSection width="200px" height="200px" />
        </View>
      )}
      <View
        position="absolute"
        w="431px"
        h="616px"
        borderTopRadius="274px"
        borderBottomRadius="50px"
        borderWidth="1px"
        borderColor="#F2EAE3"
      />
      <View
        position="absolute"
        top="20px"
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
        zIndex="-1"
        position="absolute"
        top="650px"
        right="0px"
        width="305px"
        height="405pxx"
        overflow="hidden"
      >
        <Images.PeopleBottomIntroSection width="305px" height="305px" />
      </View>
    </VStack>
  )
}
export default IntroPeopleImage
