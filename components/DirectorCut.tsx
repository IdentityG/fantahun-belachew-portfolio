'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play } from 'lucide-react';
import { featuredProjects } from '@/lib/projects';
export default function DirectorCut() {
 const [current,setCurrent] = useState(0); const [playing,setPlaying]=useState(false); const reduce=useReducedMotion(); const slides=featuredProjects;
 const next=()=>setCurrent(i=>(i+1)%slides.length); const previous=()=>setCurrent(i=>(i-1+slides.length)%slides.length);
 useEffect(()=>{if(!playing||reduce) return; const id=window.setInterval(()=>setCurrent(i=>(i+1)%slides.length),4400); return ()=>window.clearInterval(id);},[playing,reduce,slides.length]);
 const frame=slides[current];
 return <section className="director-cut" aria-labelledby="director-title"><div className="section-heading frame-heading"><div><span className="eyebrow">[ AN INTERACTIVE FRAME STUDY ]</span><h2 id="director-title">THE DIRECTOR&apos;S <em>CUT.</em></h2></div><p>One moment at a time.<br/>Browse the photographs behind the stories.</p></div>
  <div className="frame-screen" onKeyDown={(e)=>{if(e.key==='ArrowLeft')previous();if(e.key==='ArrowRight')next();}} tabIndex={0} aria-label="Interactive project frame gallery. Use left and right arrow keys to navigate.">
   <AnimatePresence mode="sync"> <motion.div key={frame.slug} className="frame-image" initial={reduce?false:{opacity:0,scale:1.06}} animate={{opacity:1,scale:1}} exit={{opacity:0}} transition={{duration:.85,ease:[.22,1,.36,1]}}><Image src={frame.landscape} alt={`Photograph from ${frame.name}`} fill quality={90} sizes="100vw"/></motion.div></AnimatePresence>
   <div className="frame-overlay"/><div className="frame-top"><span><span className="rec-circle"/> FRAME ARCHIVE / FANTAHUN BELACHEW</span><span>NO. {String(current+1).padStart(2,'0')} / {String(slides.length).padStart(2,'0')}</span></div>
   <div className="frame-middle-cross cross-one">+</div><div className="frame-middle-cross cross-two">+</div>
   <div className="frame-bottom"><div><p className="eyebrow">{frame.category.toUpperCase()} / SELECTED WORK</p><h3>{frame.name}</h3></div><Link href={`/work/${frame.slug}`} className="circle-link" aria-label={`Explore ${frame.name}`}><ArrowUpRight size={24}/></Link></div>
  </div>
  <div className="frame-controls"><div className="frame-control-buttons"><button type="button" onClick={previous} aria-label="Previous frame"><ArrowLeft size={20}/></button><button type="button" onClick={()=>setPlaying(!playing)} aria-label={playing?'Pause frame sequence':'Play frame sequence'} aria-pressed={playing}>{playing?<Pause size={17} fill="currentColor"/>:<Play size={17} fill="currentColor"/>}</button><button type="button" onClick={next} aria-label="Next frame"><ArrowRight size={20}/></button><span>THIS IS A PHOTOGRAPHIC FRAME SEQUENCE, NOT VIDEO PLAYBACK.</span></div><div className="frame-indicators" aria-label="Choose frame">{slides.map((p,i)=><button type="button" key={p.slug} onClick={()=>setCurrent(i)} className={i===current?'active':''} aria-label={`View frame ${i+1}: ${p.name}`} aria-current={i===current?'true':undefined}><span/></button>)}</div></div>
 </section>;
}
