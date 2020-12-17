import React from 'react'
import "./Header.css"
import logo from "../images/icons/logo-sm.png"
import cart from "../images/icons/cart-sm.png"
import search from "../images/icons/search-icon-sm.png"
import Nav from "./Nav"

function Header() {
    return (
        <div>
            <div className="nav-wrapper fixed-top">
		<div className="container">
			<nav className="navbar navbar-toggleable-sm navbar-expand-md">
			    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
			        ☰
			    </button>
			    <a className="navbar-brand mx-auto" href="/home"><img src={logo} alt=" "/></a>

			    <div className="navbar-collapse collapse">
			        <ul className="navbar-nav nav-justified w-100 nav-fill">
						<Nav Url="/mac " name="Mac"/>
						<Nav Url="/iphone " name="iphone"/>
						<Nav Url="/ipad" name="ipad"/>
						<Nav Url="/watch " name="Watch "/>
						<Nav Url="/Tv " name="TV"/>
						<Nav Url="/mu" name="Music"/>
						<Nav Url="/Tv " name="Suport"/>
						<Nav Url="/Tv " name="Suport"/>
						<Nav  img={<img src={search} alt=" "/>}/>
						<Nav  img={<img src={cart} alt=" "/>}/>
						
						
						
	
						{/* <li className="nav-item" ><a className="nav-link js-scroll-trigger" href="/search/"><img src={search} alt=" "/></a></li>
						<li className="nav-item"><a  className="nav-link js-scroll-trigger" href="/cart/"><img src={cart} alt=" "/></a></li> */}
			        </ul>
			    </div>
			</nav>
		</div>
	</div>
        </div>
    )
}

export default Header
