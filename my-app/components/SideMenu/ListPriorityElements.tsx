import type { NextComponentType} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { FunctionComponent } from 'react'
import PriorityElement from './PriorityElement'


const ListPriorityElements:FunctionComponent = () => {
  const renderDashboardIcon = () => {
    return(
      <svg className="h-6 w-6 text-black"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="13" r="2" />  <line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />  <path d="M6.4 20a9 9 0 1 1 11.2 0Z" /></svg>
    )
  }
  const renderOrdersIcon = () => {
    return(
      <svg className="h-6 w-6 text-black"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M3.5 5.5l1.5 1.5l2.5 -2.5" />  <path d="M3.5 11.5l1.5 1.5l2.5 -2.5" />  <path d="M3.5 17.5l1.5 1.5l2.5 -2.5" />  <line x1="11" y1="6" x2="20" y2="6" />  <line x1="11" y1="12" x2="20" y2="12" />  <line x1="11" y1="18" x2="20" y2="18" /></svg>
    )
  }
  const renderCustomerIcon = () => {
    return(
      <svg className="h-6 w-6 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
</svg>

    )
  }
  const renderEmployeeIcon = () => {
    return(
      <svg className="h-6 w-6 text-black"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M11 17a2.5 2.5 0 0 0 2 0" />  <path d="M12 3C7.336 3 4.604 5.331 4.138 8.595a11.816 11.816 0 0 0 1.998 8.592 10.777 10.777 0 003.199 3.064h0c1.666.999 3.664.999 5.33 0h0a10.777 10.777 0 0 0 3.199 -3.064 11.89 11.89 0 001.998-8.592C19.396 5.33 16.664 3 12 3z" />  <line x1="8" y1="11" x2="10" y2="13" />  <line x1="16" y1="11" x2="14" y2="13" /></svg>
    )
  }
  const renderNewsIcon = () => {
    return(
      <svg className="h-6 w-6 text-black"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11" />  <line x1="8" y1="8" x2="12" y2="8" />  <line x1="8" y1="12" x2="12" y2="12" />  <line x1="8" y1="16" x2="12" y2="16" /></svg>
    )
  }
  return (
    <div className='flex flex-col gap-y-0.5 pt-1 px-2'>
        <PriorityElement icon={renderDashboardIcon()} name={'Dashboard'} desc={'Podsumowanie'} />
        <PriorityElement icon={renderOrdersIcon()} name={'Serwisy'} desc={'Lista zgłoszeń serwisowych'} />
        <PriorityElement icon={renderCustomerIcon()} name={'Klienci'} desc={'Lista klientów'} />
        <PriorityElement icon={renderEmployeeIcon()} name={'Serwisanci'} desc={'Lista aktywnych serwisantów'} />
        <PriorityElement icon={renderNewsIcon()} name={'Wiadomości'} desc={'Skrzynka z wiadomościami'} />
    </div>
  )
}

export default ListPriorityElements