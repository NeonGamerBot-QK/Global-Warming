import {Container } from "react-bootstrap" // lol check these imports once on wifi. 
import "./style.css"
import NavBar from "./components/NavBar";
import Posters from "./components/Posters";
const bodys = []
function Body({ content }) {
return <>
	<hr class="divider" />
	<p class='lead'>
{content}
</p> </>
}
function Orbs() {
  return  <div className="orbs">
  <span className="orb"></span>
  <span className="orb2"></span>
</div>
}
function App() {
  return (
    <>
    <NavBar />
    <Orbs />
    <Container>

    <div style={{ color: 'white !important', alignContent: 'center', justifyContent: 'center', textAlign: 'center'}} className="bg-transparent p-5 rounded" id='home-page'>
<h1 id='title' style={{ textAlign: 'center' }}>Stop Pollution and Global warming </h1>
{bodys.map(e => {
  return <Body content={e} />
})}
<Body content={<Posters />} />
<Body content={<>
  <b> Flipgrid Commerical Video </b>
		<br />
		<iframe
    width="600"
    height="600"
    src="https://flipgrid.com/0ce9aff6?embed=true"
    webkitallowfullscreen
    mozallowfullscreen
    allowfullscreen
    allow="microphone; camera; display-capture"
    title="FlipGrid"></iframe>

</>} />
</div>
</Container>
<Orbs />
    </>
  );
}

export default App;
