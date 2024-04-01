import React from 'react'
import { Public, Stars, Work } from '@mui/icons-material';
import { Link } from "react-router-dom"
import './CSS/SideBar.css'
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar-container">
            <div className="sidebar-options">
                <div className="sidebar-option">
                    <Link>Home</Link>
                </div>

                <div className="sidebar-option">
                    <Link href='' className='public'>PUBLIC</Link>
                    <div className="link">
                        <div className="link-tag">
                            <Public /> 
                            <Link>Questions</Link>
                        </div>
                        <div className="tags">
                            <p>Tags</p>
                            <p>Users</p>
                        </div>
                    </div>

                    <div className="sidebar-option">
                        <p>COLLECTIVES</p>
                        <div className="link">
                            <div className="link-tag">
                                <Stars />
                                <Link>Explore Collectives</Link>
                            </div>
                        </div>
                    </div>

                    <div className="sidebar-option">
                        <p>FIND A JOB</p>
                        <div className="link">
                            <div className="link-tag link">
                                <Link className='jobs'>Jobs</Link>  
                                <Link className='company'>Companies</Link>
                            </div>
                        </div>
                    </div>

                    <div className="sidebar-option">
                        <p>TEAMS</p>
                        <div className="link">
                            <div className="link-tag">
                                <Work />
                                <Link>Companies</Link>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Sidebar
