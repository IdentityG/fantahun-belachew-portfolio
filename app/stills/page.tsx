import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { stills } from '@/lib/projects';
export const metadata:Metadata={title:'Stills Archive',description:'A photographic archive of people, landscapes and moments from Fantahun Belachew’s projects.'};
export default function StillsPage(){return <><section className="page-intro section-pad"><div className="page-intro-top"><span className="eyebrow">[ AN ARCHIVE OF MOMENTS ]</span><span className="eyebrow">12 FRAMES / COUNTLESS STORIES</span></div><h1>THE <em>STILLS.</em></h1><div className="page-intro-bottom"><p>Some moments ask you to stop. Take a closer look.</p><span className="eyebrow">A PHOTOGRAPHIC EDIT ↓</span></div></section><section className="stills-gallery section-pad">{stills.map((still,i)=><Reveal key={still.src} className={`still-item still-item-${i%6}`}><Link href={`/work/${still.slug}`} aria-label={`View ${still.project} project`}><div className="still-photo"><Image src={still.src} alt={still.name} fill quality={90} sizes="(max-width: 850px) 100vw, 55vw"/><span className="still-hover">VIEW STORY <ArrowUpRight size={20}/></span></div><div className="still-caption"><span>{String(i+1).padStart(2,'0')} / {still.name}</span><span>{still.project}</span></div></Link></Reveal>)}</section></>}
