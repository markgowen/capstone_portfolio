import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import About from '../components/About'
import Employers from '@/components/Employers'
import Projects from '@/components/Projects'


export default function Home() {
  return (
    <>
      <Head>
        <title>Mark Gowen</title>
        <meta name="description" content="Software Engineering Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head >
      <main>
        <Hero />
        <About />
        <Employers />
        <Projects />
      </main>
    </>
  )
}
