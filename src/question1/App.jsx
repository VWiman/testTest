import { useState } from "react";
// 1. Kommentarslista 3p
// Skapa en React-komponent för att hantera och visa en lista
// med kommentarer. Användare ska kunna lägga till och ta bort kommentarer.
// Listan är tom från början.

// Skapa Ett inputfält och en "Lägg till"-knapp för nya kommentarer.
// och en "Ta bort"-knapp bredvid varje kommentar för att ta bort den från listan.

function App() {
	const commentsList = ["Vad roligt!", "Vad tråkigt", "okej..."];

	const [comments, setComments] = useState(commentsList);

	const [newComment, setComment] = useState("");

  function addComment(e) {
    setComments(comments.concat(newComment));
    e.preventDefault()
   
  }
  
  function handleDelete(item) {
    setComments(comments.filter(comment => comment !== item ))
  }

	return (
		<div>
			<form onSubmit={(e) => addComment(e)}>
				<label>
					<input id="newcomment" onChange={(e) => setComment(e.target.value)}></input>
				</label>
        <button type="submit">send</button>
			</form>

			{comments.map((item, index) => (
        <p key={index}>{item} <button onClick={() => handleDelete(item)}>Delete</button></p>
			))}
		</div>
	);
}

export default App;
