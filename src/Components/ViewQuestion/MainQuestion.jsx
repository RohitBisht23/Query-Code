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
  const [showBox, setShowBox] = useState(false);

  const handleButtonClick = () => {
    setShowBox(true);
  };

  return (
    <div className='main'>
      <div className="main-container">
        <div className="main-top">
        <h2 className='main-question'>This is question title</h2>
          <Link to="/add-question" className="btn">
            <button>Ask Query</button>
          </Link>
        </div>
        
        <div className="main-description">
          <div className="info">
            <p className='p'>Timestap</p>
            <p className='p'><span>Active</span> today</p>
            <p className='p'><span>Viewed</span> 43 times</p>
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
                  <h5>This is comment - <span>User name</span> <small>Timestamp</small> </h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti similique nisi iusto recusandae? Explicabo corporis minima dignissimos possimus quas nesciunt accusantium cupiditate saepe! Delectus hic totam beatae error obcaecati mollitia.
                  Nesciunt provident placeatm dolor sit amet consectetur adipisicing elit. Deleniti similique nisi iusto recusandae? Explicabo corporis minima dignissimos possimus quas nesciunt accusantium cupiditate saepe! Delectus hic totam beatae error obcaecati mollitia.
                  Nesciunt provident placeat fuga quibusdam aliquid similique quis cumque eligendi dolore ducimus harum, quod consequatur repellendus impedit laudantium porro, esse architecto!er</p>
                </div>
              </div>

              <p onClick={()=>setShow(!show)} className='adding-comments'><button>Add comment</button></p>
              {
                show && (
                  <div className='title'>
                    <textarea type="text" placeholder='add you comment...' rows={5} style={{
                      
                    }} className='title-comments'></textarea>
                    <button onClick={handleButtonClick}>Add Comment</button>
                    
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
