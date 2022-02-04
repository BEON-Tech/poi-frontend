import { Flex, Text } from 'native-base'

const PROD_ENV = 'prod'

const isProd = (env: string) => env === PROD_ENV

export interface IEnvTagProps {
  env?: string
}

const EnvTag = ({ env = PROD_ENV }: IEnvTagProps) =>
  isProd(env) ? null : (
    <Flex
      zIndex={100000}
      bg="primary.700"
      width="75"
      height="5"
      right="30"
      bottom="0"
      position="fixed"
      justifyContent="center"
      alignItems="center"
      borderTopLeftRadius={10}
      borderTopRightRadius={10}
    >
      <Text fontSize="sm" color="invertedText.900" fontWeight="bold">
        {env}
      </Text>
    </Flex>
  )

export default EnvTag
