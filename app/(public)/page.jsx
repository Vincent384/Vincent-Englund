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
<meta name="description" content="Explore the portfolio of Vincent Englund, a skilled web developer. View projects, skills, and more." />
<meta name="keywords" content="Vincent Englund, portfolio, web developer, projects, skills" />
<meta name="author" content="Vincent Englund" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta charSet="UTF-8" />


<meta property="og:title" content="Vincent Englund - Portfolio" />
<meta property="og:description" content="Explore the portfolio of Vincent Englund, a skilled web developer. View projects, skills, and more." />
<meta property="og:type" content="website" />


<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Vincent Englund - Portfolio" />
<meta name="twitter:description" content="Explore the portfolio of Vincent Englund, a skilled web developer. View projects, skills, and more." />

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