import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import "./status.css";
import { PaperPlaneRight } from "@phosphor-icons/react";

const initial = [
  "Concordo...",
  "olha, faz sentido!",
  "Parabéns pelo progresso.",
];

export default function Status() {
  const [answers, setAnswers] = useState(initial);
  const [newAnswer, setNewAnswer] = useState("");
  function createNewAnswer(event: FormEvent) {
    event.preventDefault();

    setAnswers([newAnswer, ...answers]);
    setNewAnswer("");
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers]);
      setNewAnswer("");
    }
  }
  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptates obcaecati eum voluptatibus omnis harum adipisci, perferendis quasi perspiciatis ducimus." />
      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/eduardopanzo.png" alt="João Panzo" />
          <textarea
            id="tweet"
            placeholder="What's happening?"
            value={newAnswer}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value);
            }}
          />
        </label>

        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {answers.map((answer) => (
        <Tweet key={answer} content={answer} />
      ))}
    </main>
  );
}
