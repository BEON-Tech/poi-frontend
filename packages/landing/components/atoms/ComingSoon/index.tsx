import React from 'react'
import { Popover, Tooltip } from 'native-base'
import { useBreakpoint } from '@components/providers'
import { useTranslation } from 'next-export-i18n'
import keys from '@i18n/keys'

interface IComingSoonProps {
  Component: React.FC<any>
}

const ComingSoon = ({ Component }: IComingSoonProps) => {
  const { t } = useTranslation()
  const { isDesktop } = useBreakpoint()

  return isDesktop ? (
    <Tooltip
      label={t(keys.unclassified.comingSoonTitle)}
      openDelay={500}
      placement="top"
      hasArrow
    >
      <Component onPress={() => {}} isDisabled />
    </Tooltip>
  ) : (
    <Popover
      trigger={(triggerProps) => (
        <Component {...triggerProps} isDisabled={false} />
      )}
      placement="bottom"
    >
      <Popover.Content
        accessibilityLabel={t(keys.unclassified.comingSoonTitle)}
        w="160px"
      >
        <Popover.Arrow />
        <Popover.CloseButton />
        <Popover.Header>{t(keys.unclassified.comingSoonTitle)}</Popover.Header>
      </Popover.Content>
    </Popover>
  )
}

export default ComingSoon
