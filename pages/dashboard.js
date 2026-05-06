import Link from "next/link";
export default function Dashboard(){
return(<div className="container">
<h2>Dashboard</h2>
<div className="card">Balance: $10</div>
<Link href="/upgrade"><button className="yellow">Upgrade</button></Link>
<Link href="/withdraw"><button className="green">Withdraw</button></Link>
</div>);
}