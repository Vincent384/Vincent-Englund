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
    <div>
        <div className='flex justify-between items-center max-sm:sticky top-0 left-0 z-10 bg-gradient-to-r from-red-50 via-red-200 to-red-900 '>
            <div className="max-sm:w-[100px] w-[150px] aspect-video m-5">
            <Link href={'/'}>
                {landingpageImages[1] && <Image
                className="w-full object-contain"
                src={landingpageImages[1]}
                width={943}
                height={975}
                quality={100} 
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