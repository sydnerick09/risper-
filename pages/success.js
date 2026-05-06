import Link from "next/link";
export default function Success(){
return(<div className="container">
<h2>Congratulations</h2>
<p>Screening passed</p>
<Link href="/bonus"><button>Continue</button></Link>
</div>);
}