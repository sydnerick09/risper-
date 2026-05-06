import Link from "next/link";
export default function Assessment(){
return(<div className="container">
<h2>Skill Assessment</h2>
<Link href="/quiz1"><button>Start Assessment</button></Link>
</div>);
}