
import fs from 'fs'; import { POSTS_JSON } from '../../../lib/dbPaths';
export default function handler(req,res){
  if(req.method!=='POST') return res.status(405).end();
  const {id} = req.body;
  let arr = JSON.parse(fs.readFileSync(POSTS_JSON));
  const item = arr.find(p=>p.id===id);
  if(item){ item.likes = (item.likes||0)+1; fs.writeFileSync(POSTS_JSON, JSON.stringify(arr,null,2)); res.json({ok:true}) }
  else res.status(404).json({error:'not found'})
}
