'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'

export default function ClientHeader() {
  const pathname = usePathname()
  
  if (pathname === '/') {
    return null
  }

  return <Header />
} 