import React from 'react'
import "./CSS/allQuestion.css"
import {Link} from "react-router-dom"
import { Avatar } from '@mui/material'

function AllQuestions() {
  return (
    <div className='all-questions'>
      <div className="all-question-container">
        <div className="all-questions-left">
          <div className="all-options">
            <div className="all-option">
              <p>0</p>
              <span>Votes</span>
            </div>

            <div className="all-option">
              <p>0</p>
              <span>Answers</span>
            </div>

            <div className="all-option">
              <p>0</p>
              <small>0 Views</small>
            </div>
          </div>
        </div>

        <div className="question-answer">
          <Link to="/question">How to use drag and drop in ant</Link>
          <div style={{
            width : "90%"
          }}>
            <div>What i want is an example about how to make the drag and drop of my table works properlty.
              But I cannot figure out how to make it works
            </div>
            <div style={{
              display : "flex"
            }}>
              <span className='question-tags'>
                react
              </span>
              <span className='question-tags'>
                Node js
              </span>
              <span className='question-tags'>
                HTML
              </span>
            </div>
            <div className="author">
              <small>Timestamp</small>
              <div className='author-details'>
                <Avatar />
                <p>userName</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllQuestions
