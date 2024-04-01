import Sidebar from './Sidebar'
import "./CSS/index.css"
import Main from './Main'

function index() {
  return (
    <div className='Stack-index'>
        <div className="stack-index-content">
            <Sidebar />
            <Main />
        </div>
    </div>
  )
}

export default index
