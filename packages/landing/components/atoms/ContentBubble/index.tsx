import { HStack, Text } from 'native-base'
import { IHStackProps } from 'native-base/lib/typescript/components/primitives/Stack/HStack'

interface IContentBubbleProps extends IHStackProps {
  text: string
}

const ContentBubble = ({ text, ...props }: IContentBubbleProps) => (
  <HStack
    {...props}
    maxW="315px"
    w="315px"
    h="auto"
    justifyContent="center"
    alignItems="center"
    bg="general.50"
    borderRadius="20px"
    px="29px"
    py="24px"
  >
    <Text textAlign="center">{text}</Text>
  </HStack>
)

export default ContentBubble
