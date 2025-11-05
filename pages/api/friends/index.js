
import fs from 'fs'; import { FRIENDS_JSON } from '../../../lib/dbPaths';
export default function handler(req,res){
  if(req.method==='GET'){ try{ const data = JSON.parse(fs.readFileSync(FRIENDS_JSON)); res.json(data); } catch(e){ res.json([]) } }
  else if(req.method==='POST'){ const d=req.body; let arr=[]; try{ arr=JSON.parse(fs.readFileSync(FRIENDS_JSON)) }catch(e){} arr.push({...d,id:Date.now()}); fs.writeFileSync(FRIENDS_JSON, JSON.stringify(arr,null,2)); res.json({ok:true}) }
  else res.status(405).end()
}
