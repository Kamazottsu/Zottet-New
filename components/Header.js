
import Link from 'next/link';
export default function Header(){ return (
  <header className="header">
    <div className="brand"><h1>Zottet</h1><div className="muted">— Coaching & Social</div></div>
    <nav className="nav">
      <Link href="/"><a>Home</a></Link>
      <Link href="/feed"><a style={{marginLeft:12}}>Feed</a></Link>
      <Link href="/planos"><a style={{marginLeft:12}}>Planos</a></Link>
      <Link href="/schedule"><a style={{marginLeft:12}}>Agendar</a></Link>
      <Link href="/auth/login"><a style={{marginLeft:12}}>Login</a></Link>
    </nav>
  </header>
)}
