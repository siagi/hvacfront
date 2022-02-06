import type { NextComponentType} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import SecondaryElement from './SecondaryElement'

const ListSecondaryElements:FunctionComponent = () => {
  return (
    <div className='flex flex-col gap-y-2 pt-5 px-2'>
        <SecondaryElement name={'Dodaj serwis'} desc={'Podsumowanie'} link='/add-customer'/>
        <SecondaryElement name={'Dodaj klienta'} desc={'Podsumowanie'} link='/add-customer' />
        <SecondaryElement name={'Dodaj użytkownika'} desc={'Podsumowanie'} link='/add-user'/>
        <SecondaryElement name={'Dodaj notatke'} desc={'Podsumowanie'} link='/add-customer'/>
        <SecondaryElement name={'Dodaj zadanie'} desc={'Podsumowanie'} link='/add-customer'/>
    </div>
  )
}

export default ListSecondaryElements