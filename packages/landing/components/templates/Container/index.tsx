import React from 'react'
import { View } from 'native-base'
import { IViewProps } from 'native-base/lib/typescript/components/basic/View/types'
import { MAX_WIDTH } from '@constants'

const Container: React.FC<IViewProps> = ({ children, ...props }) => (
  <View
    maxW={{ base: '100%', lg: MAX_WIDTH }}
    w="100%"
    overflow="none"
    overflowY="hidden"
    mx="auto"
    {...props}
  >
    {children}
  </View>
)

export default Container
