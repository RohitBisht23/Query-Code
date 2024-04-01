import { Search } from "@mui/icons-material"
import "./CSS/Header.css"
import  InboxIcon from "@mui/icons-material/Inbox"
import { Avatar } from "@mui/material"
import {Link} from 'react-router-dom'
function Header() {
  return (
    <header>
        <div className="header-container">
            <div className="header-left">
                <Link to='/' className="link">
                 <img src="https://download.logo.wine/logo/Stack_Overflow/Stack_Overflow-Logo.wine.png" alt="logo" />
                </Link>
                <h3 className="product">Products</h3>
            </div>
            <div className="header-middle">
                <div className="header-search-container">
                    <Search />
                    <input type="text" placeholder = "Search..."/>
                </div>
            </div>
            <div className="header-right">
                <div className="header-right-container">
                    <Avatar className="avatar"/>
                    <InboxIcon className="inbox"/>
                    <svg aria-hidden="true" 
                         class="svg-icon iconStackExchange" 
                         width="18" height="20" 
                         viewBox="0 0 15 20"
                         fill="rgba(0, 0, 0, 0.5)"
                         style={{
                            cursor : "pointer",
                         }}>
                            <path d="M15 1H3a2 2 0 00-2 2v2h16V3a2 2 0 00-2-2ZM1 13c0 1.1.9 2 2
                             2h8v313-3h1a2 2 0 00202v02H1v2Zm16-7H12Zm16-7H1v4h16V6Z" class="stack"></path>
                    </svg>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
