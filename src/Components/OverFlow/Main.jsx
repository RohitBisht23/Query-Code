import React from 'react'
import {Link} from 'react-router-dom'
import { FilterList } from '@mui/icons-material'
import AllQuestions from './AllQuestions'
import "./CSS/main.css"

function Main() {
  return (
    <div className='main'>
      <div className="main-container">
        <div className="main-top">
          <h2>All Queries</h2>
          <Link to='/add-question'>
            <button>Put Your Query</button>
          </Link>
        </div>

        <div className="main-description">
          <p>All Queries stats</p>
          <div className="main-filter">
            <div className="main-tabs">
              <div className="main-tab">
                <Link>Newest</Link>
              </div>

              <div className="main-tab">
                <Link>Active</Link>
              </div>

              <div className="main-tab">
                <Link>More</Link>
              </div>
            </div>

            <div className="main-filter-item">
              <FilterList /> <p>Filter</p>
            </div>
          </div>
        </div>

        <div className="questions">
          <div className="question">
            <AllQuestions />
            <AllQuestions />
            <AllQuestions />
            <AllQuestions />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Main
