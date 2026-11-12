'use client';
import {useMemo,useState} from "react";
const projects=[
{title:"IntRENEt — Barangay Service Request Prototype",type:"Academic",tags:["Laravel","Python","NLP","System Integration"],desc:"An academic prototype exploring natural-language citizen concerns, classification, and personnel routing. Not a production deployment."},
{title:"Responsive Portfolio Website",type:"Web",tags:["Next.js","TypeScript","CSS"],desc:"A design-led portfolio focused on clear navigation, accessibility, responsive layouts, and internship communication."},
{title:"Database Design Exercises",type:"Database",tags:["SQL","ERD","Normalization"],desc:"Coursework exploring relational data modelling, constraints, queries, and normalization. Add verified screenshots and schema details."},
{title:"Network Simulation Lab",type:"Networking",tags:["Cisco Packet Tracer","IPv4","Subnetting"],desc:"Learning exercises for network topology, addressing, device configuration, and connectivity troubleshooting."},
{title:"Security Fundamentals Notes",type:"Security",tags:["Cybersecurity","Linux","Networking"],desc:"A learning log for foundational security concepts, safe lab practice, and defensive thinking. No claims of professional testing."}
];
export default function ProjectFilter(){const [filter,setFilter]=useState("All");const categories=["All","Academic","Web","Database","Networking","Security"];const shown=useMemo(()=>projects.filter(p=>filter==="All"||p.type===filter),[filter]);return <><div className="filters">{categories.map(c=><button key={c} className={`filter ${filter===c?"selected":""}`} onClick={()=>setFilter(c)}>{c}</button>)}</div><div className="project-list">{shown.map(p=><article className="card project-card" key={p.title}><div className="project-top"><span className="eyebrow">{p.type} / Selected work</span><span>↗</span></div><h3>{p.title}</h3><p>{p.desc}</p><div>{p.tags.map(t=><span className="tag" key={t}>{t}</span>)}</div></article>)}</div></>}
