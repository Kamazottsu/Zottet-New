
import fs from 'fs'; import { POSTS_JSON } from '../../../lib/dbPaths';
export default function handler(req,res){
  if(req.method!=='POST') return res.status(405).end();
  const {user,text,media,mediaType,game} = req.body;
  let arr = [];
  try{ arr = JSON.parse(fs.readFileSync(POSTS_JSON)) }catch(e){}
  const id = (arr.length?arr[arr.length-1].id+1:1);
  const p = {id,user,text,media,mediaType,game,likes:0,comments:[],created:Date.now()};
  arr.push(p);
  fs.writeFileSync(POSTS_JSON, JSON.stringify(arr,null,2));
  res.json({ok:true, post:p});
}
