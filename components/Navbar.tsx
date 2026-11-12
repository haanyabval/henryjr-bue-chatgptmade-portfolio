'use client';
import Link from "next/link";
import {useState} from "react";
import {Menu, X} from "lucide-react";
const links=[["Home","/"],["About","/about"],["Projects","/projects"],["Skills","/skills"],["Experience","/experience"],["Lab Notes","/lab"],["Contact","/contact"]];
export default function Navbar(){const [open,setOpen]=useState(false);return <header className="shell"><nav className="nav"><Link className="brand" href="/">HB<span>.</span></Link><button className="menu" aria-label="Toggle navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button><div className={`navlinks ${open?"open":""}`}>{links.map(([name,path])=><Link key={path} href={path} onClick={()=>setOpen(false)}>{name}</Link>)}</div><Link className="btn" href="/contact">Let's connect ↗</Link></nav></header>}
