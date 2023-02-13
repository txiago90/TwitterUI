import iconMedia  from '../assets/icon-media.svg'
import iconGif  from '../assets/icon-gif.svg'
import iconPoll  from '../assets/icon-poll.svg'
import iconEmoji  from '../assets/icon-emoji.svg'
import iconSchedule from '../assets/icon-schedule.svg'

import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Timeline.css'

export function Timeline() {
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    "Hello World",
    "Este é um clone do Twitter interativo e responsivo.",
    "Faça um tweet você também!",
    "Clique em qualquer tweet para ver comentários!"
  ])

  function createNewTweet(event: FormEvent) {
    event.preventDefault()

    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
  }

  return (
    <main className='timeline'>
      <Header title='Home' />

      <form onSubmit={createNewTweet} className='new-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/txiago90.png" alt="Thiago Pereira" />
          <textarea 
            id="tweet" 
            placeholder="What's happening?"
            value={newTweet}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewTweet(event.target.value)
            }}
          />
        </label>

        <div className="tweet-options">
          <div className="options">
            <button type='button'>
              <img src={iconMedia} alt="icon-media" />
            </button>
            <button type='button'>
              <img src={iconGif} alt="" />
            </button>
            <button type='button'>
              <img src={iconPoll} alt="" />
            </button>
            <button type='button'>
              <img src={iconEmoji} alt="" />
            </button>
            <button type='button'>
              <img src={iconSchedule} alt="" />
            </button>
          </div>
          <button type='submit'>Tweet</button>
        </div>
      </form>

      <Separator />

      {tweets.map(tweet => {
        return <Tweet key={tweet} content={tweet} />
      })}
    </main>
  )
}