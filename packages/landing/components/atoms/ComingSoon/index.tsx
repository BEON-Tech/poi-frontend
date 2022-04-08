import React, { useState } from 'react'
import { useTranslation } from 'next-export-i18n'
import keys from '@i18n/keys'
import { HStack, Text, View } from 'native-base'

interface IComingSoonProps {
  Component: React.FC<any>
  rightPlacement?: boolean
}

// import { Popover, Tooltip } from 'native-base'
// const ComingSoon = ({ Component }: IComingSoonProps) => {
//   const { t } = useTranslation()
//   const { isDesktop } = useBreakpoint()

//   return isDesktop ? (
//     <Tooltip
//       label={t(keys.unclassified.comingSoonTitle)}
//       placement="bottom"
//       hasArrow
//     >
//       <Component onPress={() => {}} isDisabled />
//     </Tooltip>
//   ) : (
//     <Popover
//       trigger={(triggerProps) => (
//       )}
//       placement="bottom"
//     >
//       <Popover.Content
//         ml="10px"
//         accessibilityLabel={t(keys.unclassified.comingSoonTitle)}
//         w="160px"
//       >
//         <Popover.Arrow />
//         <Popover.CloseButton />
//         <Popover.Header>{t(keys.unclassified.comingSoonTitle)}</Popover.Header>
//       </Popover.Content>
//     </Popover>
//   )
// }

const ComingSoon = ({ Component, rightPlacement }: IComingSoonProps) => {
  const { t } = useTranslation()
  const [showInfo, setShowInfo] = useState(false)

  const showInformation = () => setShowInfo(true)
  const hideInformation = () => setShowInfo(false)

  const positionProps = rightPlacement
    ? { right: '-90px' }
    : { bottom: '-30px' }

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'auto',
        height: 'auto',
      }}
      onMouseEnter={showInformation}
      onMouseLeave={hideInformation}
      onFocus={showInformation}
      onBlur={hideInformation}
    >
      <Component isDisabled />
      {showInfo && (
        <View position="absolute" {...positionProps}>
          <HStack
            p="10px"
            h="20px"
            borderRadius="20px"
            alignItems="center"
            justifyContent="center"
          >
            <Text color="primary.500" fontSize="xs">
              {t(keys.unclassified.comingSoonTitle)}
            </Text>
          </HStack>
        </View>
      )}
    </div>
  )
}

export default ComingSoon
