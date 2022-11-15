import { HStack, Text, VStack, Button, Pressable } from 'native-base'

import EventImage from '@assets/images/popup/eth_colombia.png'
import FooterImage from '@assets/images/popup/eth_colombia_footer.png'
import CloseIcon from '@assets/images/popup/eth_colombia_close.png'

export interface IDonateETHColombiaPopup {
  onClosePopup: () => void
}

const DonateETHColombiaPopup = ({ onClosePopup }: IDonateETHColombiaPopup) => {
  const onDonate = () => {
    window.open(
      'https://ethcolombia.clr.fund/#/projects/0x5a2c36333536d938cea526ac7c1cfdd3b9ed476e9f3b1f26bf3a4a4de2806043',
      '_blank'
    )
  }

  const onWantToKnow = () => {
    window.open(
      'https://www.instagram.com/reel/Ckv25smpiQF/?utm_source=ig_web_button_share_sheet',
      '_blank'
    )
  }

  return (
    <VStack
      width={['100%', 1024]}
      height="auto"
      background="white"
      borderRadius={25}
      borderColor="primary.700"
      borderWidth="2px"
      position="relative"
      pb={[0, '100px']}
    >
      <VStack px={['20px', '50px']} py={['24px', '40px']}>
        <Text
          bold
          color="primary.700"
          fontSize={['xl', '2xl']}
          lineHeight={['24px', '40px']}
          width={['100%', '70%']}
        >
          Estamos participando de la ronda de financiamiento de EthColombia de
          la @DEVCON 2022
        </Text>
        <Text
          color="primary.900"
          fontSize={['sm', 'md']}
          lineHeight="24px"
          width={['100%', '80%']}
          mt={['10px', '16px']}
        >
          En este año, más de 80 personas de comunidades vulnerables finalizarán
          el curso con{' '}
          <Text bold>una wallet, un perfil en Proof of Humanity</Text> y
          recibiendo <Text bold>UBIs</Text> cada hora.
        </Text>
        <Text
          color="primary.900"
          fontSize={['sm', 'md']}
          lineHeight="24px"
          width={['100%', '80%']}
          mt={['10px', '24px']}
        >
          Queremos seguir incorporando a más jóvenes y abarcando a más
          comunidades de distintas provincias del país.
        </Text>
        <Text
          color="primary.900"
          fontSize={['sm', 'md']}
          lineHeight="24px"
          width={['100%', '80%']}
          mt={['10px', '24px']}
        >
          Creemos que lo que viene será mucho más desafiante y por eso{' '}
          <Text bold>te invitamos a que nos apoyes.</Text> Además de tu ayuda,
          cada contribución, por más mínima que sea, nos permitirá acceder a una
          mayor parte del fondo común aportado por la comunidad.
        </Text>
        <HStack mt="24px" display={['none', 'flex']}>
          <Button variant="solid2" onPress={() => onDonate()}>
            Quiero donar
          </Button>
          <Button variant="brown" ml="16px" onPress={() => onWantToKnow()}>
            Quiero saber cómo donar
          </Button>
        </HStack>
        <VStack mt="20px" display={['flex', 'none']} alignItems="center">
          <Button variant="solid2" height="42px" onPress={() => onDonate()}>
            Quiero donar
          </Button>
          <Button
            variant="brown"
            height="42px"
            mt="16px"
            onPress={() => onWantToKnow()}
          >
            Quiero saber cómo donar
          </Button>
        </VStack>
      </VStack>
      <HStack position="absolute" top="16px" right="16px">
        <Pressable onPress={() => onClosePopup()} display={['none', 'block']}>
          <img width="32px" height="32px" src={CloseIcon} alt="close" />
        </Pressable>
        <Pressable onPress={() => onClosePopup()} display={['block', 'none']}>
          <img width="24px" height="24px" src={CloseIcon} alt="close" />
        </Pressable>
      </HStack>
      <HStack
        position="absolute"
        top="40px"
        right="40px"
        display={['none', 'block']}
        zIndex={-1}
      >
        <img width="128px" height="128px" src={EventImage} alt="top" />
      </HStack>
      <HStack
        position="absolute"
        bottom="0"
        display={['none', 'flex']}
        zIndex={-1}
      >
        <img width="100%" height="100%" src={FooterImage} alt="footer" />
      </HStack>
    </VStack>
  )
}

export default DonateETHColombiaPopup
