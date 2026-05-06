import bcrypt from "bcryptjs";
export default async function handler(req,res){
const {password}=req.body;
const hashed=await bcrypt.hash(password,10);
res.status(200).json({success:true});
}