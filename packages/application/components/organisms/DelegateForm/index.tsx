import { Text, VStack, HStack, Button, Input, Heading } from 'native-base'
import { Controller, useForm } from 'react-hook-form'
// issue with NEXT 12
// https://github.com/react-hook-form/resolvers/issues/271
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.umd'
import * as yup from 'yup'

export type DonationFunction = (donationValue: number) => void

export interface IDonationFormProps {
  onDonate: DonationFunction
  disabled: boolean
}

const DONATION_INPUT_NAME = 'donation'

const defaultValues = { [DONATION_INPUT_NAME]: undefined }

const MORE_THAN_ZERO_MESSAGE = 'Value must be more than 0'
const LESS_EQUAL_THAN_HUNDRED_MESSAGE = 'Value must be less or equal than 100'

const schema = yup
  .object()
  .shape({
    [DONATION_INPUT_NAME]: yup
      .number()
      .required()
      .moreThan(0, MORE_THAN_ZERO_MESSAGE)
      .max(100, LESS_EQUAL_THAN_HUNDRED_MESSAGE),
  })
  .required()

const DonationForm = ({
  onDonate,
  disabled: disabledParam = false,
}: IDonationFormProps) => {
  const { formState, control, handleSubmit } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
    reValidateMode: 'onChange',
    mode: 'onChange',
    criteriaMode: 'all',
  })

  const donate = (values: any) => {
    const { [DONATION_INPUT_NAME]: donationValue } = values
    return onDonate(donationValue)
  }

  const onSubmit = handleSubmit(donate)

  const inputDisabled = disabledParam
  const buttonDisabled = !formState.isValid || disabledParam

  return (
    <VStack flex={1}>
      <Text
        textAlign="center"
        fontWeight={700}
        my={10}
        px="2"
        fontSize={{ base: 'xl', sm: '2xl', md: '4xl', lg: '6xl', xl: '6xl' }}
        color="secondary.900"
      >
        Set the percentage of donation
      </Text>
      <HStack>
        <Controller
          name={DONATION_INPUT_NAME}
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              maxW={130}
              w={130}
              variant="outline"
              h={{ base: 10, sm: 13, md: 15, lg: 20 }}
              // fontSize="4xl"
              fontSize={{
                base: 'xl',
                sm: 'xl',
                md: '2xl',
                lg: '4xl',
                xl: '4xl',
              }}
              onChangeText={(value) => field.onChange(value)}
              isDisabled={inputDisabled}
            />
          )}
        />
        <Heading ml={5} fontWeight={700} color="secondary.900">
          %
        </Heading>
      </HStack>
      <Button
        borderRadius={34}
        h={55}
        maxW={391}
        w={{ base: 200, sm: 250, md: 300, lg: 391 }}
        mt={10}
        isDisabled={buttonDisabled}
        color="invertedText.900"
        bg="primary.800"
        onPress={onSubmit}
        _text={{
          // fontSize: '2xl',

          fontSize: {
            base: 'lg',
            sm: 'lg',
            md: 'xl',
            lg: '2xl',
            xl: '2xl',
          },
        }}
      >
        Donate my $UBIs
      </Button>
    </VStack>
  )
}

export default DonationForm
