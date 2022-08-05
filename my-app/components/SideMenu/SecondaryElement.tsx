import type { NextComponentType} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ComponentElement, FC, FunctionComponent } from 'react'
import styles from '../styles/Home.module.css'

const SecondaryElement:FunctionComponent<{name:string,desc:string,link:string}> = ({name,desc,link}) => {
  return (
   <Link href={link}>
    <button className='bg-zinc-200 p-1 hover:bg-zinc-300 active:bg-zinc-100 transition-all ease-out cursor-pointer text-xs'>
            <div>
                <div>
                    icon
                </div>
                <div>
                    <div>
                        {name}
                    </div>
                </div>

            </div>
    </button>
   </Link>  
  )
}

export default SecondaryElement