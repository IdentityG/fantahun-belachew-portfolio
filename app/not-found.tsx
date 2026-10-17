import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
export default function NotFound(){return <section className="not-found"><span className="eyebrow">[ LOST FRAME / 404 ]</span><h1>OUT OF<br/><em>FRAME.</em></h1><p>Some stories take an unexpected turn. This page isn&apos;t in the archive.</p><Link href="/" className="pill-link">BACK TO THE BEGINNING <ArrowUpRight size={20}/></Link></section>}
