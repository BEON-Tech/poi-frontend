import { useState } from 'react'
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
import { ADVISORS_SECTION } from '@constants'
import { AdvisorCard } from '@components/molecules'
import { Container } from '@components/templates'

import { BulletedTitle } from '@components/atoms'
import { useBreakpoint } from '@hooks'
import { LIST_ITEMS } from './helpers'

const Separator = () => <View h={{ base: '76px', lg: 0 }} />

const AdvisorsSection = () => {
  const [show, setShow] = useState(false)
  const { isDesktop } = useBreakpoint()
  const { t } = useTranslation()

  const onShowHide = () => setShow(!show)

  const showList = isDesktop || show

  const titleProps = isDesktop
    ? { separation: 60 }
    : {
        separation: 30,
        pl: '20px',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
      }

  return (
    <Container>
      <VStack
        alignItems="center"
        mt={isDesktop ? '161px' : '37px'}
        px={{ base: '20px', lg: '80px' }}
        pt={{ base: '40px', lg: 0 }}
      >
        {!isDesktop && (
          <Button
            onPress={onShowHide}
            variant="outline"
            mb={show ? '28px' : 0}
            rightIcon={show ? <ChevronUpIcon /> : <ChevronDownIcon />}
          >
            {show ? t(keys.advisors.hide) : t(keys.advisors.show)}
          </Button>
        )}
        <Element name={ADVISORS_SECTION} />
        {showList && (
          <>
            <BulletedTitle
              imageName="Pentagon"
              title={t(keys.advisors.title)}
              {...titleProps}
            />
            <FlatList
              mt={{ base: '47px', lg: '73px' }}
              data={LIST_ITEMS}
              ItemSeparatorComponent={Separator}
              numColumns={isDesktop ? 5 : 1}
              renderItem={(item) => <AdvisorCard item={item.item} />}
              keyExtractor={(item) => item.name}
            />
          </>
        )}
      </VStack>
    </Container>
  )
}

export default AdvisorsSection
