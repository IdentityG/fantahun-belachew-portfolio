'use client';
import { ReactNode, useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
export default function Reveal({children,className='',delay=0}:{children:ReactNode,className?:string,delay?:number}) {
 const ref = useRef<HTMLDivElement>(null);
 const visible = useInView(ref,{once:true,amount:.12}); const reduce = useReducedMotion();
 return <motion.div ref={ref} className={className} initial={reduce?false:{opacity:0,y:48}} animate={visible?{opacity:1,y:0}:undefined} transition={{duration:.9,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>;
}
