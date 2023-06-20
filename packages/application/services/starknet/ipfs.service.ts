import config from '@config'
import { Web3Storage } from 'web3.storage'
import { CIDString } from 'web3.storage/dist/src/lib/interface'

const makeStorageClient = () =>
  new Web3Storage({ token: config.web3StorageApiKey })

const formatFilePath = (cid: CIDString, fileName: string) =>
  `https://${cid}.ipfs.w3s.link/${fileName}`

export const web3UploadFile = async (file: File) => {
  const client = makeStorageClient()
  const cid = await client.put([file])
  return cid
}

export const web3GetFilePath = async (cid: CIDString) => {
  const client = makeStorageClient()
  const response = await client.get(cid)

  if (!response?.ok) {
    return null
  }

  const files = await response.files()

  if (files.length > 0) {
    const firstFile = files[0]
    return formatFilePath(cid, firstFile.name)
  }

  return null
}
