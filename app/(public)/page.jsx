'use client'

import Head from 'next/head'
import { About } from '../components/About'
import { LandingPage } from '../components/LandingPage'
import { Navbar } from '../components/Navbar'
import { Skills } from '../components/Skills'


const Home =  () => {

  return (
    <>
    <Head>

<title>Vincent Englund - Portfolio</title>
<meta name="description" content="Utforska min portfölj och se vad jag, Vincent Englund, kan göra som webbutvecklare. Här kan du titta på mina projekt, mina färdigheter och mycket mer. Jag ser fram emot att dela min passion och mina erfarenheter med dig." />
<meta name="keywords" content="Vincent Englund, portfolio, web developer, projects, skills" />
<meta name="author" content="Vincent Englund" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta charSet="UTF-8" />


<meta property="og:title" content="Vincent Englund - Portfolio" />
<meta property="og:description" content="Utforska Vincentss portfölj och upptäck hans skicklighet som webbutvecklare. Ta en titt på hans projekt, färdigheter och mycket mer för att se vad han kan erbjuda." />
<meta property="og:type" content="website" />


<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Vincent Englund - Portfolio" />
<meta name="twitter:description" content="Utforska Vincents portfölj och upptäck hans skicklighet som webbutvecklare. Ta en titt på hans projekt, färdigheter och mycket mer för att se vad han kan erbjuda." />

</Head>
    <div className=''>
      <header className=''>
          <LandingPage/>
      </header>
        <section className=''>
          <Skills/>
        </section>
        <main>
          <About/>
        </main>
    </div>
    
    
    </>
  )
}

export default Home