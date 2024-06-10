'use client'
import { db } from '@/firebase.confg'
import { collection, getDocs } from 'firebase/firestore'
import { BadgeCheck } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export const Skills = () => {
const [frontList, setFrontList] = useState([])
const [backendSkills, setBackendSkills] = useState([])

  useEffect(() => {
    const getFrontEndSkills = async() =>{
      try {
        const querySnapshot = await getDocs(collection(db, "skills"));
        const projectsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setFrontList(projectsData[0].skillsArray);

      } catch (error) {
        
      }
      }
    getFrontEndSkills()

    const getBackendSkills = async() =>{
      try {
        const querySnapshot = await getDocs(collection(db, "backendSkills"));
        const projectsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setBackendSkills(projectsData[0].skillsArray);

      } catch (error) {
        
      }
      }
    getBackendSkills()

  }, [])
  

  return (
  <>
  
    <div className='text-center'>
       <div className='mt-10'>
          <h2 className='text-2xl font-bold'>Experience</h2>
       </div>
    </div>
    <div className='grid max-sm:grid-cols-1 grid-cols-2 m-10 gap-10'>
        <div className='border-2 border-slate-300 p-10 text-center rounded-xl'>
            <div>
                <h3 className='text-xl font-bold'>Frontend Development</h3>
            </div>
            <div className='grid max-sm:grid-cols-1 lg: grid-cols-2 mt-5'>
            {
              frontList.map((skill,i)=>(
                <div key={i} className='flex gap-4 m-5 justify-around items-center'><span><BadgeCheck/></span><span className='font-bold'>{skill}</span></div>
              )
              )
            }
            </div>
        </div>
        <div className='border-2 border-slate-300 p-10 text-center rounded-xl'>
            <div>
                <h3 className='text-xl font-bold'>Backend Development</h3>
            </div>
            <div className='grid max-sm:grid-cols-1 lg: grid-cols-2 mt-5'>
            {
              backendSkills.map((item,i)=>(
                <div key={i} className='flex gap-4 m-5 justify-around items-center'><span><BadgeCheck/></span><span className='font-bold'>{item}</span></div>
              )
              )
            }
            </div>
        </div>
    </div>
    
  
  
  </>
  )
}
