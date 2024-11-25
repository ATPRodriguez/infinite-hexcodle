import React, { useEffect, useRef, useState } from 'react'
import Partida from '../models/Partida'
import '../styles/styles.css'

type Props = {}

const Game = (props: Props) => {
  const partidaRef = useRef({} as Partida);
  const [targetColor, settargetColor] = useState("");
  const [guessColor, setguessColor] = useState("");
  const [guesses, setGuesses] = useState<string[]>([]);

  const [texto, setTexto] = useState("")

  useEffect(() => {
    partidaRef.current = new Partida;
    settargetColor(partidaRef.current.secret);
    console.log(targetColor);
  }, []);

  const handleGuess = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formulario = e.currentTarget;
    let guess = formulario.guess.value
    setguessColor("");
    setguessColor("#" + guess);

    partidaRef.current.guess(guess);
    setGuesses(partidaRef.current.guesses);
  }

  function toUpper(text: string) {
    let newText = text.toUpperCase();
    setTexto(text.toUpperCase());
  }

  return (
    <>
      <div className="cards">
        <div className="target-card">
          <h1>Target</h1>
          <div className="target" style={{ backgroundColor: targetColor }} />
        </div>

        <div className="guess-card">
          <h1>Your Guess</h1>
          <div className="guess" style={{ backgroundColor: guessColor }} />
        </div>
      </div>
      <div className="guess-board">
        <form onSubmit={handleGuess}>
          <input type="text" name='guess' minLength={6} maxLength={6} onChange={(e) => toUpper(e.target.value)} value={texto} placeholder='HEX code here'/>
          <input type="submit" value={"→"}/>
        </form>
      </div>

      <div className="guesses">
        <h1>Guesses:</h1>
          {guesses.map((guess, index) => (
            <div key={index}>{guess}</div>
          ))}
      </div>
    </>
  )
}

export default Game