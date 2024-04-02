import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';  //Quills css important
import {TagsInput} from "react-tag-input-component"
import "./CSS/questionAdd.css"

function Questions() {
  return (
    <div className='add-question'>
      <div className="add-questions-container">
        <div className="head-title">
          <h1>Put Your Question Below</h1>
        </div>

        <div className="discription">
          <h4 className='Question-instruction'>Write A Good Question</h4>
          <p className='normal-instruction'>You’re ready to ask a programming-related question and this form will help guide you through the process.
Looking to ask a non-programming question? See the topics here to find a relevant site.</p>
<ul>
  <li className='steps'>Steps</li>
  <li className='instruction'>Summarize your problem in a one-line title.</li>
  <li className='instruction'>Describe your problem in more detail</li>
  <li className='instruction'>Describe what you tried and what you expected to happen.</li>
  <li className='instruction'>Add “tags” which help surface your question to members of the community.</li>
  <li className='instruction'>Review your question and post it to the site.</li>
</ul>
        </div>

        <div className="question-container">
          <div className="question-options">
            <div className="question-option">
              <div className="question-title"><h3 className='title'>Title</h3>
                <small className='title-desc'>Be specific and imagine you're asking a question to another person</small><br />
                <input type="text" placeholder='Add Question Title'/><br />
                <button>next</button>
              </div>
            </div>
            <div className="question-option">
            <div className="body-title"><h3>Body</h3>
                <small>Including all the information someone would need to answer your question</small>
                <ReactQuill className='react-quill' theme="snow"/>
              </div>
            </div>
            <div className="question-option">
              <div className="title"><h3>Tags</h3>
                <small>Add up to 5 tags to describe what your question is about</small>
                <TagsInput name ="tags" placeHolder='press enter to add new tag'/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button>Add your question</button>
    </div>
  )
}

export default Questions
