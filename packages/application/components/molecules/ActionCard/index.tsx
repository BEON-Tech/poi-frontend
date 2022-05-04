import type { IIconProps } from 'native-base'
import { VStack, View, Button } from 'native-base'
import type { IColors } from 'native-base/lib/typescript/theme/base/colors'
import type { IStackProps } from 'native-base/lib/typescript/components/primitives/Stack'

export interface IIconCardProps extends IStackProps {
  title: string
  color: IColors | string
  Icon: (props: IIconProps) => JSX.Element
  onPress: () => void
  isDisabled?: boolean
}

const ActionButton = ({ onPress, title, color, ...props }: any) => (
  <Button
    maxW={165}
    w={165}
    maxH="10"
    borderRadius={30}
    onPress={onPress}
    color="invertedText.900"
    bg={color}
    {...props}
  >
    {title}
  </Button>
)

const ActionCard = ({
  title,
  onPress,
  color,
  Icon,
  isDisabled,
  ...props
}: IIconCardProps) => (
  <VStack
    w={{ base: 240, md: 300 }}
    minW={240}
    h={{ base: 230, md: 287 }}
    maxH={287}
    borderWidth={1}
    borderColor="border.500"
    borderRadius={30}
    {...props}
  >
    <View
      justifyContent="center"
      alignItems="center"
      bg="background.700"
      maxW={142}
      maxH={142}
      w={{ base: '60px', sm: '100px', md: '142px' }}
      h={{ base: '60px', sm: '100px', md: '142px' }}
      borderRadius="full"
      mb={10}
    >
      <Icon color={color} />
    </View>
    <ActionButton
      onPress={onPress}
      title={title}
      color={color}
      isDisabled={isDisabled}
    />
  </VStack>
)

export default ActionCard
