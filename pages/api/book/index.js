
import fs from 'fs'; import { BOOKINGS_JSON } from '../../../lib/dbPaths';
export default function handler(req,res){
  if(req.method==='POST'){
    const data = req.body;
    let arr = [];
    try{ arr = JSON.parse(fs.readFileSync(BOOKINGS_JSON)) }catch(e){}
    arr.push({id:Date.now(),...data});
    try{ fs.writeFileSync(BOOKINGS_JSON, JSON.stringify(arr,null,2)) }catch(e){}
    res.json({ok:true})
  } else res.status(405).end()
}
