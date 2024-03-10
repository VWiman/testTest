import { useDispatch } from "react-redux";
import { setQuestion } from "./questionSlice";
import { useState } from "react";

export default function QuestionComponent() {
	const [questionText, setQuestionText] = useState("");
	const dispatch = useDispatch();
	function handleSend() {
		dispatch(setQuestion(questionText));
	}

	return (
		<div>
			<input onChange={(e) => setQuestionText(e.target.value)}></input>
			<button onClick={handleSend}>Submit</button>
		</div>
	);
}
