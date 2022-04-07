import { Button, IButtonProps } from 'native-base'
import { scroller } from 'react-scroll'
import { useTranslation } from 'next-export-i18n'

import keys from '@i18n/keys'
import {
  ABOUT_POI_SECTION,
  ASSISTANCE_PROGRAM_SECTION,
  OUR_TEAM_SECTION,
  PUBLIC_AUDIT_SECTION,
} from '@constants'
import { ComingSoon } from '@components/atoms'

export interface INavigationToolsProps {
  onOperationPress?: () => void
  buttonProps?: IButtonProps
}

const NavigationTools = ({ onOperationPress }: INavigationToolsProps) => {
  const { t } = useTranslation()

  const navigationButtons = [
    { text: t(keys.toolbar.about), sectionName: ABOUT_POI_SECTION },
    {
      text: t(keys.toolbar.assitanceProgram),
      sectionName: ASSISTANCE_PROGRAM_SECTION,
    },
    { text: t(keys.toolbar.ourTeam), sectionName: OUR_TEAM_SECTION },
    { text: t(keys.toolbar.publicAudit), sectionName: PUBLIC_AUDIT_SECTION },
  ]

  const onPress = (sectionName: string) => {
    if (onOperationPress) onOperationPress()
    scroller.scrollTo(sectionName, { smooth: true, duration: 1000 })
  }

  return (
    <>
      {navigationButtons.map(({ text, sectionName }) => (
        <Button
          w="auto"
          key={sectionName}
          variant="link"
          onPress={() => onPress(sectionName)}
        >
          {text}
        </Button>
      ))}
      <ComingSoon
        Component={(props: any) => (
          <Button
            w="200px"
            isDisabled
            // flex="1"
            onPress={() => {}}
            {...props}
          >
            {t(keys.toolbar.goToApp)}
          </Button>
        )}
      />
    </>
  )
}

export default NavigationTools
