'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, { useState } from 'react'
import { validate } from './validate'
import toast from 'react-hot-toast'
import emailjs from 'emailjs-com';

const ContactPage = () => {

    const [form, setForm] = useState({
        name:'',
        email:'',
        message:'',
    })

const handleInputValue = (e) =>{
    const { name, value } = e.target
    setForm({
        ...form,
        [name]:value
    })
}

const handleSubmit = async (e) =>{
    e.preventDefault()
    const validationError = validate(form)
    if (validationError) {
        toast.error(validationError);
        return;
    }

    try {
        const templateParams = {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
        };

        const response = await emailjs.send(
            process.env.NEXT_PUBLIC_SERVICEID, // Replace with your EmailJS service ID
            process.env.NEXT_PUBLIC_TEMPLATEID, // Replace with your EmailJS template ID
            templateParams,
            process.env.NEXT_PUBLIC_PRIVATE_KEY// Replace with your EmailJS user ID
        );

        if (response.status === 200) {
            toast.success('Message sent successfully');
            setForm({
                name: '',
                email: '',
                message: '',
            });
        } else {
            toast.error(`Error: ${response.text}`);
        }
    } catch (error) {
        toast.error(`Error: ${error.toString()}`);
    }



}

  return (
      <div className=''>
        <div className='my-10'>
            <h1 className='max-sm:w-[270px] lg: m-auto border-slate-400 text-center text-xl border-2 p-10 max-w-[500px]'>Send me a message</h1>
        </div>
        <div>
            <form onSubmit={handleSubmit} className='max-sm:w-[270px] max-w-[500px] m-auto'>
                <div className='flex flex-col my-5'>
                    <label htmlFor="">Name</label>
                    <Input name='name' value={form.name} onChange={handleInputValue} className=' border border-slate-400'/>
                </div>
                <div className='flex flex-col my-5'>
                    <label htmlFor="">Email</label>
                    <Input name='email' value={form.email} onChange={handleInputValue} className='border border-slate-400'/>
                </div>
                <Textarea name='message' value={form.message} onChange={handleInputValue} className='resize-none border border-slate-400'/>
                <Button className='border border-slate-400 bg-slate-500 container mt-5 hover:bg-slate-400 transition-colors duration-500 hover:text-white'>Send Message</Button>
            </form>
        </div>
    </div>
  )
}

export default ContactPage