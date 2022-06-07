/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { keys } from '@i18n'
import { HStack, Text, View } from 'native-base'

interface IComingSoonProps {
  Component: React.FC<any>
  rightPlacement?: boolean
}

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
      onClick={showInformation}
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
              {t(keys.publicAudit.comingSoonTitle)}
            </Text>
          </HStack>
        </View>
      )}
    </div>
  )
}

export default ComingSoon
