
import Header from '../components/Header';  import {useState} from 'react'
export default function Schedule(){ const [name,setName]=useState(''); const [date,setDate]=useState(''); async function book(e){ e.preventDefault(); const res = await fetch('/api/book', {method:'POST',headers:{'Content-Type':'application/json'},body: JSON.stringify({name,date})}); const data = await res.json(); if(data.ok) alert('Aula marcada!') }
  return (<div className='container'><Header/><div className='card'><h3>Agendar Aula</h3><form onSubmit={book}><input placeholder='Seu nome' value={name} onChange={e=>setName(e.target.value)} style={{width:'100%',padding:8}}/><input type='datetime-local' value={date} onChange={e=>setDate(e.target.value)} style={{width:'100%',padding:8,marginTop:8}}/><button className='btn' style={{marginTop:8}}>Agendar</button></form></div></div>)
}
