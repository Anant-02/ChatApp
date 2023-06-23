import React from 'react'
import './TextContainer.css'

const TextContainer = ({ users }) => {
  return (
    <div className='textContainer'>
    {
        users ? (
            <div>
                <h1>People Recently Chatting: </h1>
                <div className='activeContainer'>
                    <h2>
                        {users.map(({name}) => (
                            <div key={name} className='activeItem'>
                                {name}
                            </div>
                        ))}
                    </h2>
                </div>
            </div>
        )
        :
        null
    }
  </div>
  )
}

export default TextContainer