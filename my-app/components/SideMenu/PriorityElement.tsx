import type { NextComponentType} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ComponentElement, FC, FunctionComponent } from 'react'
import styles from '../styles/Home.module.css'

const PriorityElement:FunctionComponent<{name:string,desc:string}> = ({name,desc}) => {
  return (
   <button className='bg-white rounded-md p-1 hover:translate-x-4 transition-all ease-out duration-200 delay-100 focus:translate-x-4 cursor-pointer'>
        <div className='flex gap-x-1'>
            <div>
                icon
            </div>
            <div>
                <div>
                    {name}
                </div>
                <div >
                    {desc}
                </div>
            </div>

        </div>
   </button>
  )
}

export default PriorityElement