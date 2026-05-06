import Link from "next/link";
export default function Quiz1(){
return(<div className="container">
<h3>Arrange Sentence</h3>
<input placeholder="Answer"/>
<Link href="/success"><button>Submit Assessment</button></Link>
</div>);
}