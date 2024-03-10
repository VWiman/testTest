import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAnswer } from "./questionSlice";

export default function AnswerComponent() {
    const question = useSelector((state) => state.question.question)
    const answer = useSelector((state) => state.question.answer)
    const dispatch = useDispatch()

    const [inputAnswer, setInputAnswer] = useState("")

    function handleAnswer() {
        dispatch(setAnswer(inputAnswer))
    }


    return (<div><p>Question: {question}</p>
        <input type="text" onChange={(e) => setInputAnswer(e.target.value)} />
        <button onClick={handleAnswer}>Sumbit</button>
        <p>Answer: {answer}</p>
    </div>
        

    )
}
