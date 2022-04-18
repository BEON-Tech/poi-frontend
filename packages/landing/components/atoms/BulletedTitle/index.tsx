import { Flex, Heading, IFlexProps, View } from 'native-base'
import Images, { IComponentKeys } from '../Images'

const SEPARATION_VALUE = 60
const imageSize = 55.23

export interface IPentagonBulletedTitle extends IFlexProps {
  imageName: IComponentKeys
  title: string
  hideBullet?: boolean
  separation?: number
}

const PentagonBulletedTitle = ({
  imageName,
  title,
  hideBullet = false,
  separation = SEPARATION_VALUE,
  ...props
}: IPentagonBulletedTitle) => {
  const ImageComponent = Images[imageName]

  const ml = hideBullet ? 0 : `${separation}px`

  return (
    <Flex
      flexDirection="row"
      alignItems={{ base: 'flex-start', lg: 'center' }}
      justifyContent="center"
      {...props}
    >
      {!hideBullet && (
        <View ml="-10%">
          <ImageComponent width={`${imageSize}px`} height={`${imageSize}px`} />
        </View>
      )}
      <Heading
        ml={ml}
        textAlign={{ base: 'start', lg: 'center' }}
        size={{ base: '6xl', lg: '4xl' }}
      >
        {title}
      </Heading>
    </Flex>
  )
}

export default PentagonBulletedTitle
