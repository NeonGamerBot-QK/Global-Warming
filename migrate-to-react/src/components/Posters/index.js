import Poster1 from "./poster.jpeg"
import Poster2 from "./poster2.png"
import icon from "../../icon.jpeg"
export default function Posters() {
    return <>
    	{/* <p class='lead' /> */}
<b> Posters </b>
		<br />
		<div class="images">
			<img src={Poster1} alt="Poster 1" />
			<img src={Poster2} alt="Poster 2" />
		<img src={icon} alt="Icon" />
		</div>
    </>
}