'use client'

import { About } from '../components/About'
import { LandingPage } from '../components/LandingPage'
import { Navbar } from '../components/Navbar'
import { Skills } from '../components/Skills'

const Home =  () => {

  return (
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
  )
}

export default Home