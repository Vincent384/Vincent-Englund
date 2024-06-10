import React, { useEffect, useState } from 'react'
import { getDownloadURL, ref, listAll } from 'firebase/storage'
import { db, storage } from '@/firebase.confg'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { doc, getDoc } from 'firebase/firestore'
import { ContactInfo } from './ContactInfo'

export const LandingPage = () => {
  const [landingpageImages, setLandingpageImages] = useState([])
  const [title, setTitle] = useState('')

  useEffect(() => {
    const getImages = async () => {
      try {
        const imageRef = ref(storage, 'landingpage')
        const result = await listAll(imageRef)
        const urlPromises = result.items.map((itemRef) => getDownloadURL(itemRef))
        const downloadUrls = await Promise.all(urlPromises)
        setLandingpageImages(downloadUrls)
      } catch (error) {
        console.error('Error fetching images:', error)
      }
    }
    getImages()
  }, [])


  useEffect(() => {
    const getTitle = async () => {
      const docmentId = '0ZevzBPxGbG1XE0RJg3b'
      try {
        const docRef = doc(db, 'landingpage',docmentId)
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
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row md:justify-center items-center">
        <div className="flex w-full md:w-auto">
          {landingpageImages[0] && (
            <div className="w-full md:w-auto aspect-video m-10">
              <Image
                className="w-full"
                src={landingpageImages[0]}
                width={300}
                height={300}
                alt="landing page"
                priority
              />
            </div>
          )}
        </div>
    <div className="flex flex-col gap-3 text-center">
        <h1 className="text-4xl font-bold">Vincent Englund</h1>
        {
          title && 
        <h2 className="text-lg">{title}</h2>
        }
        <div className='flex gap-2 items-center justify-center'>
        <Button className='bg-white text-black border-2 rounded-full hover:bg-slate-200 transition-colors'>Download CV</Button>
        <ContactInfo/>
        </div>
      </div> 
      </div>
   
   
    </div>
  )
}
