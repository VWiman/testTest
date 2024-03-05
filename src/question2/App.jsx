// 2. Uppdatera E-post 3p
// Skapa en React-komponent för att visa och uppdatera användarens e-postadress.
// Från början visas användarens nuvarande e-postadress.
// Bredvid e-postadressen ska det finnas en "Redigera"-knapp.

import { useState } from "react";

// När "Redigera" klickas, visa ett inputfält för att skriva in en ny e-postadress
// och byt "Redigera"-knappen till en "Spara"-knapp.
// När "Spara" klickas, uppdatera e-postadressen och visa den uppdaterade adressen.


function App() {
  const [epost, setEpost] = useState("viktor.wiman@gmail.com")
  const [isEditing, setIsEditing] = useState(false)

  function handleEmail(e) {
    setIsEditing(!isEditing)
    setEpost(document.getElementById("newEmail").value)
  }

 

  return (<div><p>{epost}</p>{isEditing && <input type="text" id="newEmail" />}<button type="submit" onClick={handleEmail}>{ isEditing ? "Save" : "Edit"}</button></div>)
}

export default App;
