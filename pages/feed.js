
import useSWR from 'swr'; import Link from 'next/link'; import Header from '../components/Header'; 
const fetcher = url=> fetch(url).then(r=>r.json())
export default function Feed(){
  const {data: posts} = useSWR('/api/posts', fetcher)
  return (<div className="container"><Header/><div style={{marginTop:16}}>{posts?.map(p=>(<div className="card feed-item" key={p.id}><strong>{p.user}</strong><p>{p.text}</p>{p.media && <video className="video" controls src={p.media}></video>}<div style={{marginTop:8}}><button onClick={async ()=>{await fetch('/api/posts/like',{method:'POST',headers:{'Content-Type':'application/json'},body: JSON.stringify({id:p.id})});location.reload()}}>Curtir ({p.likes})</button> <Link href={'/post/'+p.id}><a className='link' style={{marginLeft:10}}>Abrir</a></Link></div></div>))}</div></div>)
}
