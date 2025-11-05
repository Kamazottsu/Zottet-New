
import fs from 'fs'; import { THREADS_JSON } from '../../../lib/dbPaths';
export default function handler(req,res){
  if(req.method==='GET'){ try{ const a=JSON.parse(fs.readFileSync(THREADS_JSON)); res.json(a) }catch(e){ res.json([])} }
  else if(req.method==='POST'){ const d=req.body; let a=[]; try{ a=JSON.parse(fs.readFileSync(THREADS_JSON)) }catch(e){} a.push({...d,id:Date.now()}); fs.writeFileSync(THREADS_JSON,JSON.stringify(a,null,2)); res.json({ok:true})}
  else res.status(405).end()
}
