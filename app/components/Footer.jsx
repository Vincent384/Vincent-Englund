import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <div>
        <footer>
            <div className='flex justify-center m-10 gap-4'>
                <Link className='cursor-pointer' target='_blank' href={'https://github.com/Vincent384'}>
                <Github />
                </Link>
                <Link className='cursor-pointer' target='_blank' href={'https://www.linkedin.com/in/vincent-englund-7baa17a9/'}>
                    <Linkedin />
                </Link>
            </div>
        </footer>
    </div>
  )
}
