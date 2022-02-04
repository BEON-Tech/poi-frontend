import type { IIconProps } from 'native-base'
import { HStack, VStack, View, Button, Text, Divider } from 'native-base'
import type { IColors } from 'native-base/lib/typescript/theme/base/colors'
import type { IStackProps } from 'native-base/lib/typescript/components/primitives/Stack'

export interface IActionCardProps extends IStackProps {
  title: string
  color: IColors | string
}

export interface ITitledActionCardProps extends IActionCardProps {
  subtitle: string
  onPress: () => void
  actionTitle: string
  isDisabled?: boolean
}

interface IItemSectionActionCard {
  message: string
  actionTitle: string
  onPress: () => void
  isDisabled?: boolean
}

export interface ISectionedActionCardProps extends IActionCardProps {
  items: IItemSectionActionCard[]
}

export interface IIconCardProps extends IActionCardProps {
  Icon: (props: IIconProps) => JSX.Element
  onPress: () => void
  isDisabled?: boolean
}

const ActionButton = ({ onPress, title, color, ...props }: any) => (
  <Button
    // w={{ base: 40, sm: 80, md: 100, lg: 165 }}
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

const TitledActionCard = ({
  title,
  onPress,
  subtitle,
  color,
  actionTitle,
  isDisabled,
  ...props
}: ITitledActionCardProps) => (
  <VStack
    w={300}
    h={287}
    borderWidth={1}
    borderColor="border.500"
    borderRadius={30}
    alignItems="center"
    justifyContent="center"
    px="7"
    py="10"
    {...props}
    space={3}
  >
    <Text flex="1" fontSize="2xl" color={color}>
      {title}
    </Text>
    <Text flex="1" fontSize="md" textAlign="center">
      {subtitle}
    </Text>
    <View flex="1">
      <ActionButton
        onPress={onPress}
        title={actionTitle}
        color={color}
        isDisabled={isDisabled}
      />
    </View>
  </VStack>
)

const SectionedActionCard = ({
  title,
  items,
  color,
  ...props
}: ISectionedActionCardProps) => {
  const lastElementIndex = items.length - 1
  return (
    <VStack
      px="7"
      py="10"
      borderWidth={1}
      borderColor="border.500"
      w={616}
      h={287}
      {...props}
      borderRadius={30}
    >
      <Text flex="1" fontSize="2xl" color={color}>
        {title}
      </Text>
      <HStack flex="2" w="100%">
        {items.map(
          ({ message, actionTitle, onPress, isDisabled = false }, index) => (
            <>
              <VStack
                alignItems="center"
                flex="1"
                key={message}
                pb="5"
                px="5"
                h="100%"
              >
                <Text textAlign="center" flex="1" fontSize="md">
                  {message}
                </Text>
                <ActionButton
                  w="100%"
                  onPress={onPress}
                  title={actionTitle}
                  color={color}
                  isDisabled={isDisabled}
                />
              </VStack>
              {index !== lastElementIndex && <Divider orientation="vertical" />}
            </>
          )
        )}
      </HStack>
    </VStack>
  )
}

const IconActionCard = ({
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

export default {
  IconActionCard,
  TitledActionCard,
  SectionedActionCard,
}
