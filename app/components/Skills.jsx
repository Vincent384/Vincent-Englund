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
        <div className='border-2 border-slate-300 p-10 text-center rounded-xl bg-gradient-to-l from-slate-50 via-slate-100 to-slate-200'>
            <div>
                <h3 className='text-xl font-bold'>Frontend Development</h3>
            </div>
            <div className='grid max-sm:grid-cols-1 lg: grid-cols-2 mt-5'>
            {
              frontList.map((skill,i)=>(
                <div key={i} className='flex items-center justify-center
                     text-center mt-5 cursor-pointer'><span className='container'><BadgeCheck/></span><span className='font-bold container'>{skill}</span></div>
              )
              )
            }
            </div>
        </div>
        <div className='border-2 border-slate-300 p-10 text-center rounded-xl bg-gradient-to-l from-slate-50 via-slate-100 to-slate-200'>
            <div>
                <h3 className='text-xl font-bold'>Backend Development</h3>
            </div>
            <div className='grid max-sm:grid-cols-1 lg: grid-cols-2 mt-5'>
            {
              backendSkills.map((item,i)=>(
                <div key={i} className='flex mt-5 justify-center items-center text-center'><span className='container'><BadgeCheck/></span><span className='font-bold container'>{item}</span></div>
              )
              )
            }
            </div>
        </div>
    </div>
    
  
  
  </>
  )
}
