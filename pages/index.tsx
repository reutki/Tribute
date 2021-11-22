import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import {Header} from '../components/Head'
import { InfoForm } from '../components/InfoForm'
import { Navbar } from '../components/Navbar'
import {Page1} from '../components/page1'
import {Page2} from '../components/page2'
import {Page3} from '../components/page3'
import {Page4} from '../components/page4'
import { Page5 } from '../components/page5'
import {Page6} from '../components/page6'

const Home: NextPage = () => {
return (
  <div id="main" className={styles.container}>

<Page1/>
<Page2/>
<Page3/>
<Page4/>
<Page5/>
<Page6/>

<Footer />
 </div>
)
};
export default Home;
