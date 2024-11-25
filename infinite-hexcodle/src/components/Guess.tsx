import React, { useEffect, useState } from 'react'

type Props = {
    guess : string;
}

const Guess = (props: Props) => {
    const [guessArray, setguessArray] = useState<string[]>([])
    
    useEffect(() => {
      function fillArray() {
        let array : string[] = [];
        for (let i = 0; i < guess.length; i++) {
          array.push(guess.charAt(i).toUpperCase());
        }
        setguessArray(array);
      }
    
    }, [])
    
    
    const { guess } = props;
  return (
    <div>
        {
            guessArray.map((char, index) => (
                <span key={index} style={{ borderColor : "#" + guess}}>{char}</span>
            ))
        }
    </div>
  )
}

export default Guess