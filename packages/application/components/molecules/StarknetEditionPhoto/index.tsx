import { web3GetFilePath } from '@services/starknet/ipfs.service'
import { HStack, Image, Pressable } from 'native-base'
import { useEffect, useState } from 'react'

interface StarknetEditionPhotoProps {
  cid?: string
}

const StarknetEditionPhoto = ({ cid }: StarknetEditionPhotoProps) => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null)

  const onPhotoPress = () => {
    if (photoUrl) {
      window.open(photoUrl, '_blank')
    }
  }

  useEffect(() => {
    ;(async () => {
      if (cid) {
        const url = await web3GetFilePath(cid)
        setPhotoUrl(url)
      }
    })()
  }, [cid])

  return (
    <HStack w="full" mt={6}>
      {photoUrl && (
        <Pressable onPress={onPhotoPress}>
          <Image
            src={photoUrl}
            alt="Edition"
            w={640}
            h={480}
            resizeMode="cover"
          />
        </Pressable>
      )}
    </HStack>
  )
}
export default StarknetEditionPhoto
