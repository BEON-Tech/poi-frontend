import { Flex, Heading, IFlexProps } from 'native-base'
import { HomePolygon } from '@components/atoms'

export interface IPentagonBulletedTitle extends IFlexProps {
  polygonName: string
  title: string
  showSmall?: boolean
}

const PentagonBulletedTitle = ({
  polygonName,
  title,
  showSmall = false,
  ...props
}: IPentagonBulletedTitle) => {
  const polygonWidthLg = 54
  let polygonWidthBase = 54
  let polygonMargin = 6
  let mainMargin = { base: polygonWidthLg, lg: polygonWidthLg * 2 }
  let baseHeading = '4xl'
  let flexAlignment = 'center'

  if (showSmall) {
    polygonWidthBase = 26
    polygonMargin = 4
    mainMargin = { base: 0, lg: 0 }
    baseHeading = '2xl'
    flexAlignment = 'flex-start'
  }

  return (
    <Flex
      flexDirection="row"
      alignItems="center"
      justifyContent={flexAlignment}
      {...props}
      mr={mainMargin}
    >
      <HomePolygon
        mr={{ base: polygonMargin, lg: polygonWidthLg }}
        w={{ base: polygonWidthBase, lg: polygonWidthLg }}
        h={{ base: polygonWidthBase - 1, lg: polygonWidthLg - 1 }}
        polygon={polygonName}
      />
      <Heading
        fontWeight="600"
        color="text.900"
        fontSize={{ base: baseHeading, lg: '6xl' }}
      >
        {title}
      </Heading>
    </Flex>
  )
}

export default PentagonBulletedTitle
