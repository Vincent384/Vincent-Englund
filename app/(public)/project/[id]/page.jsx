'use client'
import { db } from '@/firebase.confg'
import { doc, getDoc } from 'firebase/firestore'
import { LoaderCircle } from 'lucide-react'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'


const ProjectDetailPage = () => {

  const { id } = useParams()
  const [singleProject, setSingleProject] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const docRef = doc(db, 'projects', id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          setSingleProject({
            id: docSnap.id,
            ...docSnap.data()
          })
        } else {
          console.log('No such document!')
        }

      } catch (error) {
        console.error(error.message)
      }
    }

    getData()
  }, [id])

  return (
    <div className='grid max-sm:grid-cols-1  xl:grid-cols-2 gap-10 m-10'>
      {singleProject ? (
        <>
        <div className='grid text-center max-lg:row-start-2'>
          <h1 className='text-2xl'>{singleProject.title}</h1>
          <p className='mt-5 '>{singleProject.description}</p>
        </div>
         <div className='border-2 border-slate-300 p-2'>
            <Carousel>
              <CarouselContent>
                { singleProject && singleProject.Images.map((image,i)=>{
                  return <CarouselItem className='w-full aspect-video' key={i}><Image
                  className='w-full h-full object-cover'
                  src={image}
                  width={200}
                  height={200}
                  quality={100} 
                  alt={singleProject.title}/></CarouselItem>
                })
                
              }
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div> 
          
          </>

      ) : (
        <p className='h-screen flex justify-center items-center spin'><LoaderCircle /></p>
      )}
    </div>
  )
}

export default ProjectDetailPage