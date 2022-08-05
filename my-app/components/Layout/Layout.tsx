import type { NextComponentType, NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Children, FunctionComponent, ReactNode } from 'react'
import Avatar from '../Elements/Avatar'
import Search from '../Elements/Search'
import ListPriorityElements from '../SideMenu/ListPriorityElements'
import ListSecondaryElements from '../SideMenu/ListSecondaryElements'


const Layout:FunctionComponent<{children:JSX.Element}> = ({children}) => {
  return (
    
    <div>
        <Head>
            <title>HVAC service</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='px-5 flex gap-3 row-start-1 h-14 justify-between bg-black text-white border-b-4 border-zinc-100 shadow-md pt-2 mb-1'>
            <div>
                <Image src='/images/LogoMC23.svg' width='40' height='40' quality='100'/>
            </div>
            <Search/>
            <Avatar/>
            {/* <div className='flex'>
                <div>Sign in</div>
                <div>Login</div>
            </div> */}
        </div>
        <div className='grid grid-cols-12 grid-rows-1'>
            <div className='col-start-1 bg-zinc-100'>
                <ListPriorityElements/>
                {/* <ListSecondaryElements/> */}
            </div>
            <div className='row-start-1 col-start-2 col-span-11'>
                <div className='flex flex-col'>
                    {children}
                </div>
            </div>
    </div>
    </div>
  )
}

export default Layout