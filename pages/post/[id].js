
import useSWR from 'swr'; import {useRouter} from 'next/router'; import Header from '../../components/Header'; 
const fetcher = url=> fetch(url).then(r=>r.json())
export default function Post(){ const router = useRouter(); const {id} = router.query; const {data: post} = useSWR(id?('/api/posts/'+id):null, fetcher); if(!post) return <div className='container'><Header/><p>Carregando...</p></div>
  return (<div className='container'><Header/><div className='card'><h3>{post.user}</h3><p>{post.text}</p>{post.media && <video className='video' controls src={post.media}></video>}<div style={{marginTop:8}}><strong>Comentários</strong>{post.comments.map((c,i)=>(<div key={i} style={{borderTop:'1px solid #111',paddingTop:6,marginTop:6}}><b>{c.user}</b>: {c.text}</div>))}</div></div></div>)
}
