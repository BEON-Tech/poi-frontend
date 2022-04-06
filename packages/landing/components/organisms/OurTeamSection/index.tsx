import { useMemo, useState } from 'react'
import { Element } from 'react-scroll'
import { useTranslation } from 'next-export-i18n'
import {
  VStack,
  FlatList,
  View,
  Button,
  ChevronUpIcon,
  ChevronDownIcon,
} from 'native-base'

import keys from '@i18n/keys'
import { OUR_TEAM_SECTION } from '@constants'
import { PersonCard } from '@components/molecules'
import { BulletedTitle } from '@components/atoms'
import { Container } from '@components/templates'

import { useBreakpoint } from '@hooks'
import ListItems, { POI_LOGO_ITEM } from './helpers'

const Separator = () => <View h={{ base: '76px', lg: 0 }} />

const OurTeamSectionDesktop = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <VStack pt="217px" alignItems="center">
        <Element name={OUR_TEAM_SECTION} />
        <BulletedTitle imageName="Pentagon" title={t(keys.ourTeam.title)} />
        <FlatList
          mt="73px"
          data={ListItems}
          numColumns={4}
          renderItem={(item) => <PersonCard item={item.item} />}
          keyExtractor={(item) => item.name}
        />
      </VStack>
    </Container>
  )
}

const OurTeamSectionMobile = () => {
  const [show, setShow] = useState(false)
  const { t } = useTranslation()

  const onShowHide = () => setShow(!show)

  const Items = useMemo(
    () => [...ListItems.filter((item) => item.role), POI_LOGO_ITEM],
    []
  )

  return (
    <VStack pt={{ base: '100px', lg: '217px' }} alignItems="center" px="16px">
      <Element name={OUR_TEAM_SECTION} />
      <BulletedTitle
        separation={30}
        imageName="Pentagon"
        title={t(keys.ourTeam.title)}
        pl="20px"
        justifyContent="flex-start"
        alignItems="flex-start"
        alignSelf="flex-start"
        w={{ base: '150px', lg: '100%' }}
        pb="64px"
      />
      <Button
        w="100%"
        onPress={onShowHide}
        variant="solid"
        mb={show ? '28px' : 0}
        rightIcon={show ? <ChevronUpIcon /> : <ChevronDownIcon />}
      >
        {show ? t(keys.ourTeam.hide) : t(keys.ourTeam.show)}
      </Button>
      {show && (
        <FlatList
          mt="47px"
          data={Items}
          numColumns={2}
          ItemSeparatorComponent={Separator}
          renderItem={(item) => <PersonCard item={item.item} />}
          keyExtractor={(item) => item.name}
        />
      )}
    </VStack>
  )
}

const OurTeamSection = () => {
  const { isDesktop } = useBreakpoint()
  return isDesktop ? <OurTeamSectionDesktop /> : <OurTeamSectionMobile />
}

export default OurTeamSection
