import { Divider, HStack } from 'native-base'

import { Images, NavigationTools, LanguageSelect } from '@components/atoms'

const Toolbar = () => (
  <HStack
    justifyContent="space-between"
    alignItems="center"
    mt="34px"
    maxH="50px"
    w="100%"
    pr="4"
    pl="80px"
  >
    <Images.Logo width="84px" height="84px" />
    <NavigationTools />
    <Divider mx="1" color="black" orientation="vertical" />
    <LanguageSelect />
  </HStack>
)

export default Toolbar
