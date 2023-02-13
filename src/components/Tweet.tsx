import iconReply from '../assets/icon-reply.svg'
import { ArrowClockwise, ChatCircle, Heart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import './Tweet.css'

interface TweetProps {
  content: string
}

export function Tweet(props: TweetProps) {
  return (
    <Link to='/TwitterUI/status' className="tweet">
      <img src="https://github.com/txiago90.png" alt="Thiago Pereira" />

      <div className="tweet-content">
          <div className="tweet-content-header">
            <strong>Thiago Pereira</strong>
            <span>@psthiago</span>
          </div>

          <p>{props.content}</p>

          <div className="tweet-content-footer">
            <button type='button' className='button1'>
              <div className="icon">
                <ChatCircle />
              </div>
              3
            </button>
            
            <button type='button' className='button2'>
              <div className="icon">
                <ArrowClockwise />
              </div>
              5
            </button>
            
            <button type='button' className='button3'>
              <div className="icon">
                <Heart />
              </div>
              70
            </button>
          </div>
      </div>

    </Link>
  )
}