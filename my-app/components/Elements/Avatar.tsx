import type { NextComponentType} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { FunctionComponent } from 'react'


const Avatar:FunctionComponent = () => {
  return (
      <div className='flex'>
          <div>Name</div>
          <div className='bg-gray-600 w-10 h-10 rounded-full'></div>
            
      </div>
  )
}

export default Avatar