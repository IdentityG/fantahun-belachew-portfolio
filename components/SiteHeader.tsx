'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
const items = [{label: 'Work',href:'/work'}, {label:'Stills',href:'/stills'}, {label:'About',href:'/about'}, {label:'Contact',href:'/contact'}];
export default function SiteHeader() {
 const [open, setOpen] = useState(false); const [scrolled,setScrolled] = useState(false); const path = usePathname();
 useEffect(() => { setOpen(false); },[path]);
 useEffect(() => {const onScroll=()=>setScrolled(window.scrollY>28); window.addEventListener('scroll',onScroll,{passive:true}); onScroll(); return ()=>window.removeEventListener('scroll',onScroll);},[]);
 useEffect(() => {document.body.style.overflow=open?'hidden':''; return ()=>{document.body.style.overflow='';};},[open]);
 return <>
  <a className="skip-link" href="#main-content">Skip to content</a>
  <header className={`site-header ${scrolled?'is-scrolled':''}`}>
    <Link href="/" className="brand" aria-label="Fantahun Belachew — Home"><span className="brand-monogram">F<span className="accent">.</span>B</span><span className="brand-name">FANTAHUN<br/>BELACHEW</span></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{items.map((item,index)=><Link key={item.href} className={`nav-item ${path===item.href?'active':''}`} href={item.href}><span className="nav-number">0{index+1}</span>{item.label}</Link>)}</nav>
    <div className="header-end"><span className="header-role">INDEPENDENT FILMMAKER<br/>AVAILABLE FOR COLLABORATIONS</span><Link href="/contact" className="header-contact" aria-label="Contact Fantahun"><ArrowUpRight size={19}/></Link></div>
    <button className="mobile-menu-button" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X size={25}/>:<Menu size={25}/>}</button>
  </header>
  <AnimatePresence>{open&&<motion.div className="mobile-nav-overlay" initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}} transition={{duration:.32}}><div className="mobile-nav-list">{items.map((item,index)=><Link key={item.href} href={item.href} onClick={()=>setOpen(false)}><span>0{index+1}</span>{item.label}<ArrowUpRight size={24}/></Link>)}</div><p className="micro">FANTAHUN BELACHEW / STORIES IN MOTION</p></motion.div>}</AnimatePresence>
 </>;
}
