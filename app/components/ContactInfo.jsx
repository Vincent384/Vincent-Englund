import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export const ContactInfo = () => {
  return (
    <div>
      <Link href='/contact'>
        <Button className='rounded-full hover:opacity-80 transition-opacity'>Kontakta mig</Button>
      </Link>
    </div>
  )
}
