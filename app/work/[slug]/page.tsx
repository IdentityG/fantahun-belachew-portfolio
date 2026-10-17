import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { projects,getProject,getNextProject } from '@/lib/projects';
export function generateStaticParams(){return projects.map(({slug})=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=getProject(slug);return p?{title:p.name,description:p.descriptor,openGraph:{images:[p.cover]}}:{title:'Project Not Found'};}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const project=getProject(slug);if(!project)notFound();const next=getNextProject(slug);
 return <article className="case-study">
  <section className="case-hero"><div className="case-cover"><Image src={project.landscape} alt={`Opening photograph from ${project.name}`} fill priority sizes="100vw" quality={90}/></div><div className="case-cover-shade"/><div className="case-hero-content"><div className="case-hero-top"><Link href="/work" className="back-link"><ArrowLeft size={17}/> ALL PROJECTS</Link><span>FILM ARCHIVE / NO. {project.number}</span></div><div><span className="eyebrow">[ {project.category.toUpperCase()} / SELECTED WORK ]</span><h1>{project.name}<span className="accent">.</span></h1><p>{project.short}</p></div><div className="case-hero-bottom"><span>FANTAHUN BELACHEW / PORTFOLIO</span><span>SCROLL TO EXPLORE ↓</span></div></div></section>
  <section className="case-intro section-pad"><Reveal><span className="eyebrow">01 / THE PROJECT</span><h2>{project.descriptor}</h2></Reveal><Reveal delay={.1} className="case-facts"><div><span>PROJECT</span><strong>{project.name}</strong></div>{project.client&&<div><span>CLIENT</span><strong>{project.client}</strong></div>}{project.location&&<div><span>LOCATION</span><strong>{project.location}</strong></div>}{project.role&&<div><span>CREATIVE ROLE</span><strong>{project.role === 'Art Director' ? 'Fantahun Belachew / Art Director' : project.role}</strong></div>}<div><span>SERVICES</span><strong>{project.services.join(' / ')}</strong></div><div><span>SOURCE</span><strong>Original portfolio / Page {project.sourcePage}</strong></div></Reveal></section>
  <section className="case-gallery" aria-label={`${project.name} photo gallery`}>{project.images.map((src,i)=><Reveal key={src} className={`case-gallery-item case-gallery-item-${i%5}`}><div className="case-gallery-img"><Image src={src} alt={`${project.name} — photograph ${i+1}`} fill sizes={i%5===0?'100vw':'(max-width: 850px) 100vw, 65vw'} quality={90}/></div><div className="case-image-caption"><span>FANTAHUN BELACHEW / {project.name.toUpperCase()}</span><span>FRAME {String(i+1).padStart(2,'0')}</span></div></Reveal>)}</section>
  <section className="case-next"><span className="eyebrow">[ END OF THIS STORY / NEXT IN THE ARCHIVE ]</span><Link href={`/work/${next.slug}`}><span>NEXT PROJECT / {next.number}</span><h2>{next.name}<ArrowUpRight size={52}/></h2></Link></section>
 </article>;
}
