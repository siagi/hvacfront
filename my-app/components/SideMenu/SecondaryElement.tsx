import type { NextComponentType} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ComponentElement, FC, FunctionComponent } from 'react'
import styles from '../styles/Home.module.css'

const SecondaryElement:FunctionComponent<{name:string,desc:string,link:string}> = ({name,desc,link}) => {
  return (
   <Link href={link}>
    <button className='bg-white rounded-3xl p-2 hover:rounded-xl hover:translate-x-5 transition-all ease-out duration-200 delay-100 cursor-pointer focus:rounded-xl focus:translate-x-5 '>
            <div className='flex gap-x-4'>
                <div>
                    icon
                </div>
                <div>
                    <div style={{color:'#00508D'}} className='font-semibold text-lg'>
                        {name}
                    </div>
                </div>

            </div>
    </button>
   </Link>  
  )
}

export default SecondaryElement