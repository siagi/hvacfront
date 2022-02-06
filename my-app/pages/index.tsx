import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Calendar from '../components/Calendar/Calendar'
import Avatar from '../components/Elements/Avatar'
import Search from '../components/Elements/Search'
import Layout from '../components/Layout/Layout'
import ListPriorityElements from '../components/SideMenu/ListPriorityElements'
import ListSecondaryElements from '../components/SideMenu/ListSecondaryElements'
import PriorityElement from '../components/SideMenu/PriorityElement'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
        <Calendar/>
    </div>
  )
}

export default Home
