import { useEffect } from 'react'
import { Contract } from '@ethersproject/contracts'
import {} from '@ethersproject/transactions'

import { useWallet } from '../wallet'

export const useContractEvents = (address: any, abi: any, method: string) => {
  const { account, library, active } = useWallet()

  const addFilter = () => {
    if (active) {
      // listen for changes on an Ethereum address
      console.log(`listening for Transfer...`)
      const contract = new Contract(address, abi, library!.getSigner())
      const fromMe = contract.filters.Transfer(account)
      library!.on(fromMe, (from, to, amount, event) => {
        console.log('Events Transfer|sent', { from, to, amount, event })
      })

      const methodFromMe = contract.filters[method](account)
      library!.on(methodFromMe, (from, to, amount, event) => {
        console.log(`Events ${method}`, { from, to, amount, event })
      })
      // const toMe = contract.filters.Transfer(null, account);
      // library!.on(toMe, (from, to, amount, event) => {
      //   console.log('Transfer|received', { from, to, amount, event });
      // });
      // remove listener when the component is unmounted
      return () => {
        //   library!.removeAllListeners(toMe);
        library!.removeAllListeners(fromMe)
        library!.removeAllListeners(methodFromMe)
      }
    }
  }

  return addFilter
}
