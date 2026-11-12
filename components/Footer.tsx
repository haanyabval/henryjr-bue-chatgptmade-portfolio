import Link from "next/link";
export default function Footer(){return <footer className="shell footer"><span>© {new Date().getFullYear()} Henry Bue. Built with curiosity.</span><span><Link href="/contact">Contact</Link>　·　<Link href="/resume">Resume</Link>　·　<a href="https://github.com/haanyabval" target="_blank" rel="noreferrer">GitHub ↗</a></span></footer>}
