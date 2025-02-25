'use client'
import React, { useState } from 'react'
import { Navlink } from './Nav-link'
import { Menu } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

export const Navlinks = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () =>{
      setIsOpen(!isOpen)
    }

    const NAV_LINKS = [
        { label: 'Hem', href: '/' },
        { label: 'Mina projekt', href: '/projects' },
        { label: 'Kontakt', href:'/contact'}
    ]

    return (
        <>
            <div className='sm:flex gap-4 hidden'>
                {NAV_LINKS.map((link, i) => (
                    <Navlink className='' key={i} href={link.href} label={link.label} />
                ))}
            </div>
            <div className='max-sm:flex gap-4 hidden'>
                {
                    <div>
                  
                        {isOpen ?
                        <DropdownMenu>
                        <DropdownMenuTrigger><Menu onClick={toggleMenu} /></DropdownMenuTrigger>
                        <DropdownMenuContent className='flex flex-col items-center'>
                        {NAV_LINKS.map((link, i) => (
                    <Navlink className='' key={i} href={link.href} label={link.label} />
                ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                      
                        :           <DropdownMenu>
                        <DropdownMenuTrigger><Menu onClick={toggleMenu} /></DropdownMenuTrigger>
                        <DropdownMenuContent className='flex flex-col items-center'>
                        {NAV_LINKS.map((link, i) => (
                    <Navlink className='' key={i} href={link.href} label={link.label} />
                ))}
                        </DropdownMenuContent>
                      </DropdownMenu>}
                  
                    </div>
                }
            </div>       
        </>
    )
}
