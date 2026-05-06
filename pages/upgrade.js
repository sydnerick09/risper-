import axios from "axios";
export default function Upgrade(){
const pay=async()=>{
const res=await axios.post("/api/paystack",{email:"test@mail.com",amount:5});
window.location.href=res.data.data.authorization_url;
};
return(<div className="container">
<h2>Upgrade Plan</h2>
<button onClick={pay}>Pay with Paystack</button>
</div>);
}