import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  const location = useLocation()
  const [scrollY, setScrollY] = useState(0)
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
      <Header />
      <main className="flex-1 pt-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}