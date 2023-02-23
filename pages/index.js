import Head from 'next/head'
import Hero from "../componants/Hero"
import Alternate from '@/componants/Alternate'
import Projects from '@/componants/Projects'
import Fethure from '@/componants/Fethure'
import Testimonial from '@/componants/Testimonial'
import Callto from '@/componants/Callto'
import Contact from '@/componants/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Blog</title>
        <meta name="description" content="A blog powered by Next js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <main >
        <Hero />
        <Alternate />
        <Fethure />
        <Projects />
        <Testimonial />
        <Callto />
       
      </main>
    </>
  )
}
