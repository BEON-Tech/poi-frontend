import { Text, VStack } from 'native-base'
import { useState } from 'react'

import { ICard, IPerson } from '@constants/types'
import { useTranslation } from 'next-export-i18n'

interface IPersonCardProps {
  item: IPerson | ICard
}

const overlayBGColor = `rgba(242, 228, 227, 0.5)`

const PersonCard = ({ item }: IPersonCardProps) => {
  const { imagePath, name, role } = item

  const { t } = useTranslation()
  const [showInfo, setShowInfo] = useState(false)

  const hasInfo = name && role

  const showInformation = () => setShowInfo(true)
  const hideInformation = () => setShowInfo(false)

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '316px',
        height: '223px',
        borderRadius: '30px',
        position: 'relative',
        margin: '15px',
      }}
      // // the `as any` come from the fact of Typescript
      // // and the event handlers
      onMouseEnter={(hasInfo && showInformation) as any}
      onMouseLeave={(hasInfo && hideInformation) as any}
      onFocus={(hasInfo && showInformation) as any}
      onBlur={(hasInfo && hideInformation) as any}
    >
      <img
        width="316px"
        height="223px"
        src={imagePath}
        alt={`${name}'s facial`}
      />
      {showInfo && (
        <VStack
          position="absolute"
          alignItems="center"
          justifyContent="flex-end"
          pb="17px"
          h="100%"
          w="100%"
          borderRadius="30px"
          bg={overlayBGColor}
        >
          <Text lineHeight="28px" fontWeight="bold">
            {name}
          </Text>
          <Text lineHeight="28px" fontSize="md">
            {t(role)}
          </Text>
        </VStack>
      )}
    </div>
  )
}

export default PersonCard
