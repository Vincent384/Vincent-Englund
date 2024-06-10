'use client'
import React from 'react'
import { Navlink } from './Nav-link'

export const Navlinks = () => {
    const NAV_LINKS = [
        { label: 'Home', href: '/' },
        { label: 'Projects', href: '/projects' },
        { label: 'Contact', href:'/contact'}
    ]

    return (
        <div className='flex gap-4'>
            {NAV_LINKS.map((link, i) => (
                <Navlink key={i} href={link.href} label={link.label} />
            ))}
        </div>
    )
}
