"use client"
import { useState, useEffect } from 'react'

export default function Header(){
  const [open, setOpen] = useState(false)
  useEffect(()=>{
    // close nav on route change (basic)
    const hide = ()=> setOpen(false)
    return ()=> hide()
  },[])

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="logo" href="#hero">Your Name</a>
        <nav className="nav" style={{display: open ? 'flex' : undefined}}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="menu-toggle" aria-expanded={open} onClick={()=>setOpen(!open)}>☰</button>
      </div>
    </header>
  )
}
