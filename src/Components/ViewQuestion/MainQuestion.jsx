import React from 'react'
import { Link } from "react-router-dom"

function MainQuestion() {
  return (
    <div className='main'>
      <div className="main-container">
        <div className="main-top">
        <h2 className='main-question'>This is question title</h2>
          <Link to="/add-question">
            <button>Ask Query</button>
          </Link>
        </div>
        
        <div className="main-description">
          <div className="info">
            <p>Timestap</p>
            <p><span>Active</span> today</p>
            <p><span>Viewed</span> 43 times</p>
          </div>
        </div>

        <div className="all-questions">
          <div className="all-question-container">
            <div className="all-question-left">
              <div className="all-options">
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainQuestion
