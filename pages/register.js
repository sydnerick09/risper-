import {useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";
export default function Register(){
const router=useRouter();
const [form,setForm]=useState({});
const submit=async()=>{await axios.post("/api/register",form);router.push("/assessment");};
return(<div className="container">
<h2>Create Account</h2>
<input placeholder="Full Name" onChange={e=>setForm({...form,name:e.target.value})}/>
<input placeholder="Phone" onChange={e=>setForm({...form,phone:e.target.value})}/>
<input placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})}/>
<select onChange={e=>setForm({...form,country:e.target.value})}>
<option>Kenya</option><option>Uganda</option><option>Tanzania</option><option>Nigeria</option>
</select>
<input type="password" placeholder="Password" onChange={e=>setForm({...form,password:e.target.value})}/>
<button onClick={submit}>Create Account</button>
</div>);}