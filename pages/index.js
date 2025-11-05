
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div className="container">
      <Header/>
      <main style={{marginTop:20}}>
        <div className="card">
          <h2>Zottet — Coaching & Social</h2>
          <p className="muted">Rede social para jogadores e coaching de Valorant. Teste o protótipo.</p>
          <div style={{marginTop:12}}>
            <Link href="/auth/login"><a className="btn">Entrar / Cadastrar</a></Link>
            <Link href="/feed"><a className="btn" style={{marginLeft:8}}>Ver Feed</a></Link>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}
