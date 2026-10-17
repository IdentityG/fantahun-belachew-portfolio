'use client';
import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, Copy, ChevronDown } from 'lucide-react';
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
export default function ContactForm() {
 const [name,setName]=useState('');const [sender,setSender]=useState('');const [type,setType]=useState('Documentary / Film');const [message,setMessage]=useState('');const [copied,setCopied]=useState(false);const [error,setError]=useState('');
 const submit=async(e:FormEvent<HTMLFormElement>)=>{
  e.preventDefault(); setError('');setCopied(false);
  const subject=`Portfolio inquiry — ${type} — ${name}`;
  const body=`Hello Fantahun,\n\n${message}\n\nProject type: ${type}\nFrom: ${name}\nReply to: ${sender}`;
  if(email){window.location.href=`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;return;}
  const draft=`To: Fantahun Belachew\nSubject: ${subject}\n\n${body}`;
  try{await navigator.clipboard.writeText(draft);setCopied(true);}catch{setError('Unable to access clipboard. Please use a browser with clipboard permissions enabled.');}
 };
 return <form className="contact-form" onSubmit={submit}>
  <div className="form-row"><label htmlFor="name">01 / YOUR NAME</label><input id="name" name="name" required minLength={2} maxLength={100} value={name} onChange={e=>setName(e.target.value)} placeholder="What's your name?" autoComplete="name"/></div>
  <div className="form-row"><label htmlFor="email">02 / EMAIL ADDRESS</label><input id="email" name="email" type="email" required value={sender} onChange={e=>setSender(e.target.value)} placeholder="Where can we reach you?" autoComplete="email"/></div>
  <div className="form-row"><label htmlFor="project-type">03 / WHAT ARE WE MAKING?</label><span className="select-wrap"><select id="project-type" value={type} onChange={e=>setType(e.target.value)}><option>Documentary / Film</option><option>Commercial / Brand</option><option>Event Coverage</option><option>Music Video</option><option>Photography</option><option>Something Else</option></select><ChevronDown size={21} aria-hidden="true"/></span></div>
  <div className="form-row"><label htmlFor="message">04 / TELL THE STORY</label><textarea id="message" required minLength={10} maxLength={3000} rows={3} value={message} onChange={e=>setMessage(e.target.value)} placeholder="Tell us about your vision, timing and creative brief..."/></div>
  <button className="form-submit" type="submit"><span>{email?'OPEN EMAIL DRAFT':'COPY ENQUIRY'}</span>{copied?<Check size={25}/>:email?<ArrowUpRight size={25}/>:<Copy size={23}/>}</button>
  <div aria-live="polite" className="form-status">{copied?'Enquiry copied. You can paste it into a message to Fantahun once you have his confirmed contact details.':error||(!email?'This preview has no verified recipient email configured. Your enquiry is copied locally and is not submitted to a server.':'Your email app opens with a prefilled message; sending is completed in your email app.')}</div>
 </form>;
}
