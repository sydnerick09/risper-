import Link from "next/link";
export default function Bonus(){
return(<div className="container">
<h2>You earned $10</h2>
<Link href="/dashboard"><button>Continue</button></Link>
</div>);
}