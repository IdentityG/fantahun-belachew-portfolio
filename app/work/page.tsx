import type { Metadata } from 'next';
import WorkFilter from '@/components/WorkFilter';
export const metadata: Metadata = {title:'Selected Work',description:'Explore documentaries, events, cultural projects and cinematography by Fantahun Belachew.'};
export default function WorkPage(){return <><section className="page-intro section-pad"><div className="page-intro-top"><span className="eyebrow">[ PORTFOLIO / SELECTED PROJECTS ]</span><span className="eyebrow">08 PROJECTS / AN ONGOING STORY</span></div><h1>THE <em>WORK.</em></h1><div className="page-intro-bottom"><p>A visual record of the places, people and moments that deserve to be remembered.</p><span className="eyebrow">SCROLL TO EXPLORE ↓</span></div></section><section className="work-listing section-pad"><WorkFilter/></section></>}
