import { Button, IButtonProps } from 'native-base'
import { useTranslation } from 'next-export-i18n'

import keys from '@i18n/keys'
import {
  ABOUT_POI_SECTION,
  ASSISTANCE_PROGRAM_SECTION,
  OUR_TEAM_SECTION,
  PUBLIC_AUDIT_SECTION,
} from '@constants'
import { ComingSoon } from '@components/atoms'
import Link from 'next/link'

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

  return (
    <>
      {navigationButtons.map(({ text, sectionName }) => (
        <Link key={sectionName} href={`#${sectionName}`} passHref>
          <Button w="auto" variant="link" onPress={onOperationPress}>
            {text}
          </Button>
        </Link>
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
