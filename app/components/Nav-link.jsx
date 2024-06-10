'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export const Navlink = ({label,href}) => {

    const pathname = usePathname()

    const isActive = pathname === href
  return (
    <>
    <Link href={href} className={cn('text-lg hover:opacity-30 transition-opacity', isActive && 'underline')}>{label}</Link>
    </>
  )
}
