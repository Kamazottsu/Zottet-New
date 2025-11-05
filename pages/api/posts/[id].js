
import fs from 'fs'; import { POSTS_JSON } from '../../../lib/dbPaths';
export default function handler(req,res){
  const { id } = req.query;
  try{ const arr = JSON.parse(fs.readFileSync(POSTS_JSON)); const p = arr.find(x=>String(x.id)===String(id)); if(!p) return res.status(404).end(); res.json(p) } catch(e){ res.status(500).end() }
}
