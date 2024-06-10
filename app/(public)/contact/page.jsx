'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, { useState } from 'react'

const ContactPage = () => {

    const [form, setForm] = useState([
        {name:''},
        {email:''},
        {message:''}
    ])


  return (
      <div className=''>
        <div className='mb-10'>
            <h1 className='m-auto border-slate-400 text-center font-bold border-2 p-10 max-w-[500px]'>Send me a message</h1>
        </div>
        <div>
            <form className='max-w-[500px] m-auto'>
                <div className='flex flex-col my-5'>
                    <label htmlFor="">Name</label>
                    <Input className=' border border-slate-400'/>
                </div>
                <div className='flex flex-col my-5'>
                    <label htmlFor="">Email</label>
                    <Input className='border border-slate-400'/>
                </div>
                <Textarea className='resize-none border border-slate-400'/>
                <Button variant='ghost' className='border border-slate-400 container mt-5 hover:bg-slate-400 transition-colors duration-500 hover:text-white'>Send Message</Button>
            </form>
        </div>
    </div>
  )
}

export default ContactPage