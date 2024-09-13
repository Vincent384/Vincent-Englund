import { db } from '@/firebase.confg'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'

export const About = () => {
const [aboutText, setAboutText] = useState([])

    useEffect(() => {
        const getAboutText = async() =>{
            try {
              const querySnapshot = await getDocs(collection(db, "About"));
              const projectsData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
              }));
              setAboutText(projectsData);
              console.log(projectsData)
            } catch (error) {
              console.log(error.message)
            }
            }
          getAboutText()
      }, [])

  return (
    <div className='my-10'>
            <div className='my-10 text-center'>
                <h2 className='text-2xl font-bold'>Lite om mig</h2>
            </div>
            {
                aboutText && aboutText.map((item,i)=>(
                    
                   <div key={i} className='grid max-sm:grid-cols-1 lg: grid-cols-2 text-center m-10 gap-10'>
                 
                <div className='max-sm:mb-5 border-2 border-slate-300 p-10 text-center rounded-xl bg-gradient-to-r from-slate-50 via-slate-100 to-slate-200'>
                    <p>{item.text}</p>
                </div>
                <div className='border-2 border-slate-300 p-10 text-center rounded-xl bg-gradient-to-r from-slate-50 via-slate-100 to-slate-200'>
                    <p>{item.text2}</p>
                </div>
      
                    </div>
                    
                ))



            }
    </div>
  )
}
