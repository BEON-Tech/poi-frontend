import { Button, HStack, IButtonProps } from 'native-base'
import { useTranslation } from 'next-export-i18n'
import keys from '@i18n/keys'
import {
  ABOUT_POI_SECTION,
  ASSISTANCE_PROGRAM_SECTION,
  OUR_TEAM_SECTION,
  PUBLIC_AUDIT_SECTION,
} from '@constants'
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
    <HStack w="full" justifyContent="space-evenly">
      {navigationButtons.map(({ text, sectionName }) => (
        <Link
          key={sectionName}
          href={`#${sectionName}`}
          replace
          passHref
          scroll
        >
          <Button w="auto" variant="link" onPress={onOperationPress}>
            {text}
          </Button>
        </Link>
      ))}
    </HStack>
  )
}

export default NavigationTools
