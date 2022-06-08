import { Flex, Heading, IFlexProps } from 'native-base'
import { HomePolygon } from '@components/atoms'

export interface IPentagonBulletedTitle extends IFlexProps {
  polygonName: string
  title: string
  separation?: number
}

const PentagonBulletedTitle = ({
  polygonName,
  title,
  ...props
}: IPentagonBulletedTitle) => (
  <Flex
    flexDirection="row"
    alignItems="center"
    justifyContent="center"
    {...props}
  >
    <HomePolygon mr={{ base: 8, lg: 12 }} w={54} h={53} polygon={polygonName} />
    <Heading
      fontWeight="600"
      color="text.900"
      fontSize={{ base: '4xl', lg: '6xl' }}
    >
      {title}
    </Heading>
  </Flex>
)

export default PentagonBulletedTitle
