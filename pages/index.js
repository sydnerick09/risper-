import Link from "next/link";
export default function Home(){return(<div className="container">
<h2>Welcome to AI Task Platform</h2>
<p>Earn money by completing AI tasks</p>
<ul><li>Text annotation</li><li>Sentence arrangement</li><li>Content classification</li><li>Data categorization</li><li>Pattern recognition</li></ul>
<label><input type="checkbox"/> Agree to terms</label><br/>
<Link href="/register"><button>Create Account</button></Link>
</div>);}