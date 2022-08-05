import type { NextComponentType} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { FunctionComponent } from 'react'


const Avatar:FunctionComponent = () => {
  return (
      <div className='flex'>
          <div className='w-10 bg-zinc-500 h-10 rounded-full flex justify-center items-center text-sm'>MM</div>
            
      </div>
  )
}

export default Avatar