'use client'
import { Navbar } from '@/app/components/Navbar'
import { ProjectList } from '@/app/components/ProjectLists'
import { db } from '@/firebase.confg'
import { doc, getDoc } from 'firebase/firestore'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'

const Projects = () => {
  const [title, setTitle] = useState('')

  useEffect(() => {
    const getTitle = async () => {
      const docmentId = '1PGhkTiipXVt4CooXRi8'
      try {
        const docRef = doc(db, 'projectpagetitle',docmentId)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          setTitle(docSnap.data().title)
        } else {
          console.log('No such document!')
        }
      } catch (error) {
        console.error("Error fetching title:", error)
      }
    }

    getTitle()
  }, [])

  return (
    <div>
            <Head>
        {/* Basic SEO */}
        <title>{title ? `${title} - Vincent Englund Projects` : 'Vincent Englund Projects'}</title>
        <meta name="description" content="Discover the projects by Vincent Englund, showcasing skills and expertise in web development." />
        <meta name="keywords" content="Vincent Englund, projects, web development, portfolio" />
        <meta name="author" content="Vincent Englund" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content={title ? `${title} - Vincent Englund Projects` : 'Vincent Englund Projects'} />
        <meta property="og:description" content="Discover the projects by Vincent Englund, showcasing skills and expertise in web development." />
        <meta property="og:image" content="https://yourwebsite.com/path-to-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/projects" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title ? `${title} - Vincent Englund Projects` : 'Vincent Englund Projects'} />
        <meta name="twitter:description" content="Discover the projects by Vincent Englund, showcasing skills and expertise in web development." />
        <meta name="twitter:image" content="https://yourwebsite.com/path-to-image.jpg" />

        {/* Additional Metadata */}
        <link rel="canonical" href="https://yourwebsite.com/projects" />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="your-google-site-verification-code" />
      </Head>
      <div className='flex m-10 gap-10 max-sm:flex-col item-center justify-center md:flex-row items-center'>
        <div>
          <h1 className='text-center text-4xl'>My Projects</h1>
        </div>
        <div>
          {title && <p>{title}</p>}
        </div>
      </div>
      <section>
        <ProjectList />
      </section>
    </div>
  )
}

export default Projects
