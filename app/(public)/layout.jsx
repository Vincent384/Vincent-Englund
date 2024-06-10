'use client'
import { getDownloadURL, listAll, ref } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import Link from 'next/link'
import { storage } from '@/firebase.confg'
import Image from 'next/image'
import { Footer } from '../components/Footer'

const PublicLayout = ({children}) => {
    
    const [landingpageImages, setLandingpageImages] = useState([])

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

  return (
    //TODO PRATA OM STICKY ELLER INTE
    <div>
        <div className='flex justify-between items-center max-sm:sticky top-0 left-0 bg-white border lg:border-none'>
            <div className="m-5">
            <Link href={'/'}>
                {landingpageImages[1] && <Image
                className="10"
                src={landingpageImages[1]}
                width={150}
                height={150}
                alt="landing page"
                priority
                />}
            </Link>
            </div>
            <Navbar/>

        </div>
        {children}
        <Footer/>
        </div>
  )
}

export default PublicLayout