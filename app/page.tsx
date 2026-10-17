import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownRight, ArrowUpRight, MoveUpRight } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import Reveal from '@/components/Reveal';
import DirectorCut from '@/components/DirectorCut';
import { featuredProjects } from '@/lib/projects';
export default function Home() {
 return <>
  <section className="hero" aria-labelledby="hero-title">
   <div className="hero-grid-texture" aria-hidden="true"/>
   <div className="hero-eyebrow"><span><span className="signal-dot"/> INDEPENDENT FILMMAKER & CINEMATOGRAPHER</span><span>ETHIOPIA / STORIES WITHOUT BORDERS</span></div>
   <div className="hero-portrait"><Image src="/images/fantahun-portrait.webp" alt="Portrait of filmmaker Fantahun Belachew" fill priority sizes="(max-width: 900px) 85vw, 56vw" quality={90}/></div>
   <h1 className="hero-type" id="hero-title"><div className="hero-first">FANTAHUN<span className="hero-asterisk">✳</span></div><div className="hero-last">BELACHEW<span className="hero-period">.</span></div></h1>
   <div className="hero-bottom"><p>THE WORLD IS FULL OF STORIES.<br/><em>I FRAME THE ONES THAT MATTER.</em></p><a className="hero-scroll" href="#selected-work">EXPLORE THE WORK <ArrowDownRight size={23}/></a><span className="hero-frame-label">[ FRAME 001 / THE BEGINNING ]</span></div>
   <div className="hero-side">FILMMAKER / CINEMATOGRAPHER / STORYTELLER</div>
  </section>

  <section id="selected-work" className="selected-work section-pad"><div className="section-heading"><Reveal><div className="eyebrow"><span className="section-index">01 /</span> THE WORK</div><h2>STORIES THAT<br/><em>STAY WITH YOU.</em></h2></Reveal><Reveal delay={.12}><div className="heading-aside"><span className="thin-rule"/><p>From the vastness of Borana to the energy of a city after dark. A collection of moments, people and places seen through a filmmaker&apos;s lens.</p><Link className="text-link" href="/work">VIEW ALL PROJECTS <ArrowUpRight size={18}/></Link></div></Reveal></div>
   <div className="featured-grid">{featuredProjects.map((project,index)=><ProjectCard key={project.slug} project={project} index={index} layout="featured"/>)}</div>
   <Reveal className="all-work-bottom"><Link href="/work" className="pill-link">EXPLORE ALL EIGHT PROJECTS <ArrowUpRight size={20}/></Link><span className="micro">THE SELECTED PORTFOLIO / 2026</span></Reveal>
  </section>

  <div className="marquee-band" aria-hidden="true"><div className="marquee-track">{Array.from({length:4}).map((_,i)=><span key={i}>DOCUMENTARY <b>✳</b> CINEMATOGRAPHY <b>✳</b> PHOTOGRAPHY <b>✳</b> STORYTELLING <b>✳</b>&nbsp;</span>)}</div></div>

  <DirectorCut/>

  <section className="manifesto section-pad"><div className="manifesto-image"><Image src="/images/fantahun-on-set.webp" fill sizes="(max-width: 850px) 100vw, 43vw" alt="Fantahun Belachew working with a camera"/><span className="manifesto-frame-number">F. B. / BEHIND THE LENS</span></div><div className="manifesto-copy"><Reveal><span className="eyebrow"><span className="section-index">02 /</span> THE FILMMAKER</span><h2>THE EYE<br/>BEHIND <em>THE</em><br/>FRAME<span className="accent">.</span></h2><div className="manifesto-line"/><p>Every image is a choice. Every frame is an opportunity to make something felt, not just seen.</p><p>Fantahun Belachew is a filmmaker, cinematographer and storyteller working across documentary, commercial, music video and event production.</p><Link href="/about" className="text-link">GET TO KNOW ME <MoveUpRight size={19}/></Link></Reveal></div></section>

  <section className="services section-pad"><Reveal><span className="eyebrow"><span className="section-index">03 /</span> WHAT I DO</span><div className="section-heading services-heading"><h2>ONE VISION.<br/><em>MANY FORMS.</em></h2><p>The medium changes. The commitment to the story never does.</p></div></Reveal><div className="service-list">{[{i:'01',name:'DOCUMENTARY FILMS',note:'Real people. Real places. Real stories.'},{i:'02',name:'CINEMATOGRAPHY',note:'Mood, movement and visual language.'},{i:'03',name:'PHOTOGRAPHY',note:'Moments made to last.'},{i:'04',name:'EDITING & MOTION',note:'The rhythm of the final story.'}].map(x=><div key={x.i} className="service-row"><span>{x.i}</span><h3>{x.name}</h3><p>{x.note}</p><ArrowUpRight size={23}/></div>)}</div></section>

  <section className="closing-frame"><div className="closing-frame-image"><Image src="/images/gada-elder.webp" fill alt="Documentary portrait from The Gada System" sizes="100vw"/></div><div className="closing-frame-overlay"/><Reveal className="closing-frame-copy"><span className="eyebrow">[ THE END IS JUST THE BEGINNING ]</span><h2>GOOD STORIES<br/>DESERVE TO<br/><em>BE SEEN.</em></h2><Link href="/contact" className="pill-link pill-link-light">TELL ME YOUR STORY <ArrowUpRight size={20}/></Link></Reveal></section>
 </>;
}
