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
}: IPentagonBulletedTitle) => {
  const polygonWidth = 54

  return (
    <Flex
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      {...props}
      mr={{ base: polygonWidth, lg: polygonWidth * 2 }}
    >
      <HomePolygon
        mr={{ base: 6, lg: polygonWidth }}
        w={polygonWidth}
        h={polygonWidth - 1}
        polygon={polygonName}
      />
      <Heading
        fontWeight="600"
        color="text.900"
        fontSize={{ base: '4xl', lg: '6xl' }}
      >
        {title}
      </Heading>
    </Flex>
  )
}

export default PentagonBulletedTitle
