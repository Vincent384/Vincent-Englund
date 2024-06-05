'use client'
import { LandingPage } from './components/LandingPage'
import { Navbar } from './components/Navbar'
import { Skills } from './components/Skills'

const Home =  () => {

  return (
    <div className=''>
      <header className='border-2 m-10 bg-slate-50/10'>
          <Navbar/>
          <LandingPage/>
      </header>
        <section className='flex justify-center items-center'>
          <Skills/>

        </section>
    </div>
  )
}

export default Home