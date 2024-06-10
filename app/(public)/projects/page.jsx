'use client'
import { Navbar } from '@/app/components/Navbar'
import { ProjectList } from '@/app/components/ProjectLists'
import { db } from '@/firebase.confg'
import { doc, getDoc } from 'firebase/firestore'
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
