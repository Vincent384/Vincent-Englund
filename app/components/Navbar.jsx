import  {Github , Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export const Navbar = () => {
    const [logoImages, setlogoImages] = useState([])

    useEffect(() => {
      const getImages = async () => {
        try {
          const imageRef = ref(storage, 'logo')
          const result = await listAll(imageRef)
          const urlPromises = result.items.map((itemRef) => getDownloadURL(itemRef))
          const downloadUrls = await Promise.all(urlPromises)
          setlogoImages(downloadUrls)
        } catch (error) {
          console.error('Error fetching images:', error)
        }
      }
      getImages()
    }, [])
  



  return (
    <div className='flex justify-end mr-10 mt-3'>
        <nav>
            <div>
                    <Image
                    src={logoImages[0]}
                    width={100}
                    height={100}
                    alt='logo'
                    />
                
            </div>
            <ul className='flex gap-4'>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/projects'}>Projects</Link>
                </li>
            </ul>
        </nav>
        </div>
  )
}
