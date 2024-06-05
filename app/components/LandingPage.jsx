import React, { useEffect, useState } from 'react'
import { getDownloadURL, ref, listAll } from 'firebase/storage'
import { storage } from '@/firebase.confg'
import Image from 'next/image'
import Link from 'next/link'

export const LandingPage = () => {
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
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link href={'/'}>
            <Image
              className="ml-10"
              src={landingpageImages[0]}
              width={200}
              height={200}
              alt="landing page"
              priority
            />
          </Link>
        </div>
        <div className="flex w-full md:w-auto">
          {landingpageImages[1] && (
            <div className="w-full md:w-auto aspect-video m-10">
              <Image
                className="w-full"
                src={landingpageImages[1]}
                width={300}
                height={300}
                alt="landing page"
                priority
              />
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mb-10 pb-10 text-center">
        <h1 className="text-3xl mb-5">Hi, Welcome to my page</h1>
        <h2 className="text-lg">Creating with Passion, Evolving with Purpose</h2>
      </div>
    </div>
  )
}
