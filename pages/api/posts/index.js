
import fs from 'fs'; import { POSTS_JSON } from '../../../lib/dbPaths';
export default function handler(req,res){
  if(req.method==='GET'){ try{ const data = JSON.parse(fs.readFileSync(POSTS_JSON)); res.json(data); } catch(e){ res.json([]) } }
  else res.status(405).end()
}
