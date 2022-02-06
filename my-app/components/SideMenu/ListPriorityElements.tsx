import type { NextComponentType} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { FunctionComponent } from 'react'
import PriorityElement from './PriorityElement'

const ListPriorityElements:FunctionComponent = () => {
  return (
    <div className='flex flex-col gap-y-2 pt-5 px-2'>
        <PriorityElement name={'Dashboard'} desc={'Podsumowanie'} />
        <PriorityElement name={'Serwisy'} desc={'Lista zgłoszeń serwisowych'} />
        <PriorityElement name={'Klienci'} desc={'Lista klientów'} />
        <PriorityElement name={'Serwisanci'} desc={'Lista aktywnych serwisantów'} />
        <PriorityElement name={'Wiadomości'} desc={'Skrzynka z wiadomościami'} />
    </div>
  )
}

export default ListPriorityElements