import { Flex, Heading, IFlexProps } from 'native-base'

const SEPARATION_VALUE = 60
// const imageSize = 55.23

export interface IPentagonBulletedTitle extends IFlexProps {
  title: string
  separation?: number
}

const PentagonBulletedTitle = ({
  title,
  separation = SEPARATION_VALUE,
  ...props
}: IPentagonBulletedTitle) => {
  const ml = `${separation}px`

  return (
    <Flex
      flexDirection="row"
      alignItems={{ base: 'flex-start', lg: 'center' }}
      justifyContent="center"
      {...props}
    >
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
