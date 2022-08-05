import type { NextComponentType} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ComponentElement, FC, FunctionComponent } from 'react'
import styles from '../styles/Home.module.css'

const PriorityElement:FunctionComponent<{name:string,desc:string,icon:any}> = ({name,desc, icon}) => {
  return (
   <button className='bg-zinc-200 p-1 hover:bg-zinc-300 active:bg-zinc-100 transition-all ease-out cursor-pointer text-xs'>
        <div className='flex justify-center flex-col'>
            <div className='flex justify-center pb-1 pt-1'>
                {icon}
            </div>
            <div>
                <div>
                    {name}
                </div>
            </div>

        </div>
   </button>
  )
}

export default PriorityElement