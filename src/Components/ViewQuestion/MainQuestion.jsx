import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Bookmark, History } from '@mui/icons-material';
import { Avatar } from '@mui/material'
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
import "./CSS/mainquestion.css"


function MainQuestion() {

  const [show, setShow] = useState(false);

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
                <p className='arrow'><FontAwesomeIcon icon={faArrowUp} /></p>
                <p className='arrow'>0</p>
                <p className='arrow'><FontAwesomeIcon icon={faArrowDown} /></p>
                <Bookmark />
                <History />
              </div>
            </div>

            <div className="question-answer">
              <p>This is test answer body</p>
              <div className="author">
                <small>Asked timeStamp</small>
                <div className="auth-details">
                  <Avatar/>
                  <p>Rohit Bisht</p>
                </div>
              </div>

              <div className="comments">
                <div className="comment">
                  <p>This is comment - <span>User name</span> <small>Timestamp</small></p>
                </div>
              </div>

              <p onClick={()=>setShow(!show)}>Add commment</p>
              {
                show && (
                  <div className='title'>
                    <textarea type="text" placeholder='add you comment...' rows={5} style={{
                      
                    }}></textarea>
                    <button>Add Comment</button>
                  </div>
                )
              }
            </div>
          </div>
        </div>

        <div className="all-questions">
          <p>No. of answers</p>

          <div className="all-question-container">
            <div className="all-question-left">
              <div className="all-options">
                <p className='arrow'><FontAwesomeIcon icon={faArrowUp} /></p>
                <p className='arrow'>0</p>
                <p className='arrow'><FontAwesomeIcon icon={faArrowDown} /></p>
                <Bookmark />
                <History />
              </div>
            </div>

            <div className="question-answer">
              <p>This is test answer body</p>
              <div className="author">
                <small>Asked timeStamp</small>
                <div className="auth-details">
                  <Avatar/>
                  <p>Rohit Bisht</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-answer">
        <h3>Add Your Answer</h3>
        <ReactQuill className='react-quill' theme='snow' style={{
          height : "200px"
        }}/>
      </div>
      <button>Post your answer</button>
    </div>
  )
}

export default MainQuestion
