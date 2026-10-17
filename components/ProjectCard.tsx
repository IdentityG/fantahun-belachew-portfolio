'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/lib/projects';
import Reveal from '@/components/Reveal';
export default function ProjectCard({project,index,layout='grid'}:{project:Project,index:number,layout?:'grid'|'featured'|'list'}) {
 return <Reveal className={`project-card project-card-${layout} project-card-position-${index%4}`} delay={Math.min(index%2*.09,.18)}>
  <Link href={`/work/${project.slug}`} className="project-card-link" aria-label={`View ${project.name} project`}>
   <div className="project-card-photo"><Image src={project.cover} alt={`Photography from ${project.name}`} fill sizes={layout==='featured'?'(max-width: 850px) 100vw, 65vw':'(max-width: 850px) 100vw, 50vw'} quality={85}/><div className="project-photo-shade"/><span className="photo-corner photo-corner-tl"/><span className="photo-corner photo-corner-br"/><span className="project-card-view">VIEW PROJECT <ArrowUpRight size={19}/></span></div>
   <div className="project-card-meta"><div><div className="micro meta-project-number">PROJECT / {project.number} <span className="meta-separator">—</span> {project.category.toUpperCase()}</div><h3>{project.name}</h3></div><span className="project-arrow"><ArrowUpRight size={23}/></span></div>
  </Link>
 </Reveal>;
}
