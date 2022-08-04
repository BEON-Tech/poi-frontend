import { Button, HStack, IButtonProps } from 'native-base'
import { useTranslation } from 'next-export-i18n'
import keys from '@i18n/keys'
import {
  ABOUT_POI_SECTION,
  ASSISTANCE_PROGRAM_SECTION,
  OUR_TEAM_SECTION,
} from '@constants'
import Link from 'next/link'
import { useBreakpoint } from '@hooks'
import Config from '@config'

export interface INavigationToolsProps {
  onOperationPress?: () => void
  buttonProps?: IButtonProps
}

interface INavigationToolsButton {
  text: string
  sectionName: string
  isUrl: boolean
}

interface INavigationToolsLocalProps extends INavigationToolsProps {
  buttons: INavigationToolsButton[]
}

const NavigationToolsDesktop = ({
  onOperationPress,
  buttons,
}: INavigationToolsLocalProps) => (
  <HStack w="full" justifyContent="space-evenly">
    {buttons.map(({ text, sectionName, isUrl }) => {
      if (isUrl) {
        return (
          <a
            key={sectionName}
            href={sectionName}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <Button w="auto" variant="link" onPress={onOperationPress}>
              {text}
            </Button>
          </a>
        )
      }
      return (
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
      )
    })}
  </HStack>
)

const NavigationToolsMobile = ({
  onOperationPress,
  buttons,
}: INavigationToolsLocalProps) => (
  <>
    {buttons.map(({ text, sectionName, isUrl }) => {
      if (isUrl) {
        return (
          <Link key={sectionName} href={sectionName} replace passHref scroll>
            <a
              key={sectionName}
              href={sectionName}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Button w="auto" variant="link" onPress={onOperationPress}>
                {text}
              </Button>
            </a>
          </Link>
        )
      }

      return (
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
      )
    })}
  </>
)

const NavigationTools = ({ onOperationPress }: INavigationToolsProps) => {
  const { t } = useTranslation()
  const { isDesktop } = useBreakpoint()

  const navigationButtons = [
    {
      text: t(keys.toolbar.about),
      sectionName: ABOUT_POI_SECTION,
      isUrl: false,
    },
    {
      text: t(keys.toolbar.assitanceProgram),
      sectionName: ASSISTANCE_PROGRAM_SECTION,
      isUrl: false,
    },
    {
      text: t(keys.toolbar.ourTeam),
      sectionName: OUR_TEAM_SECTION,
      isUrl: false,
    },
    {
      text: t(keys.toolbar.publicAudit),
      sectionName: `${Config.appURL}/publicaudit`,
      isUrl: true,
    },
  ]

  return isDesktop ? (
    <NavigationToolsDesktop
      onOperationPress={onOperationPress}
      buttons={navigationButtons}
    />
  ) : (
    <NavigationToolsMobile
      onOperationPress={onOperationPress}
      buttons={navigationButtons}
    />
  )
}

export default NavigationTools
