import { PaperPlaneRight } from "phosphor-react"
import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'

export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    "Genial!",
    "Digite seu comentário a este tweet também!",
    "Clique em 'Home' para voltar."
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()

    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }
  
  return (
    <main className='status'>
      <Header title='Tweet' />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae repudiandae corrupti quasi iure iusto nulla accusamus, ipsum, ipsam dolorem temporibus perspiciatis, enim distinctio quo? Ipsa minus animi beatae molestias! Voluptatibus!"/>
      
      <Separator />

      <form onSubmit={createNewAnswer} className='answer-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/txiago90.png" alt="Thiago Pereira" />
          <textarea 
            id="tweet" 
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value)
            }}
            />
        </label>

        <button type='submit'>
          <PaperPlaneRight />
          <span>Answer</span> 
        </button>
      </form>


      {answers.map(answers => {
        return <Tweet key={answers} content={answers} />
      })}
    </main>
  )
}