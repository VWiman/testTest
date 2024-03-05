// 3. Välj Favoritfärg via Dropdown 3p
// Skapa två React-komponenter: ParentComponent och ChildComponent.
// ChildComponent ska innehålla en dropdown-lista (select i html) där
// användaren kan välja sin favoritfärg.
// När en färg väljs, skicka detta val till ParentComponent genom en callback-funktion.
// ParentComponent ska visa användarens valda favoritfärg.

import { useState } from "react";

// I ChildComponent, implementera ett <select>-element med några färgalternativ.
// Använd en callback-funktion för att meddela ParentComponent om användarens val.
// ParentComponent ska ta emot och visa det valda färgalternativet.

function App() {

  const [color, setColor] = useState("red")


	const ParentComponent = () => {
		function selectC(e) {
			console.log("set");
      console.log(e.target.value);
      setColor(e.target.value)
		}
		return (
			<div style={{width: "200px", height: "200px", backgroundColor: color}}>
				<ChildComponent selectC={selectC} />
			</div>
		);
	};

	const ChildComponent = ({ selectC }) => {
		return (
      <select onChange={(e) => selectC(e)} value={color}>
				<option value="red">red</option>
				<option value="blue">blue</option>
			</select>
		);
  };
  
	return <ParentComponent />;
}

export default App;
