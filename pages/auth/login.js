
import { signIn } from 'next-auth/react'; import Header from '../../components/Header'; 
export default function Login(){ return (<div className='container'><Header/><div className='card'><h3>Entrar no Zottet</h3><p>Use OAuth (configure providers) ou crie conta mock.</p><div style={{display:'flex',gap:8}}><button onClick={()=>signIn('google')} className='btn'>Google</button><button onClick={()=>signIn('github')} className='btn'>GitHub</button><button onClick={()=>signIn('discord')} className='btn'>Discord</button></div></div></div>) }
