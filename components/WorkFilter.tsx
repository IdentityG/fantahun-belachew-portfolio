'use client';
import { useMemo, useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/projects';
const categories=['All','Documentary','Heritage','Commercial','Events','Sports'] as const;
export default function WorkFilter() {
 const [category,setCategory]=useState<string>('All');const filtered=useMemo(()=>category==='All'?projects:projects.filter(p=>p.category===category),[category]);
 return <><div className="filter-bar"><div className="filter-tabs" role="group" aria-label="Filter projects by category">{categories.map(cat=><button type="button" key={cat} className={category===cat?'active':''} onClick={()=>setCategory(cat)} aria-pressed={category===cat}>{cat}<span className="filter-count">{cat==='All'?projects.length:projects.filter(p=>p.category===cat).length}</span></button>)}</div><span className="micro filter-total">SHOWING {String(filtered.length).padStart(2,'0')} PROJECTS</span></div><div className="all-projects-grid" key={category}>{filtered.map((project,index)=><ProjectCard key={project.slug} project={project} index={index}/>)}</div></>;
}
