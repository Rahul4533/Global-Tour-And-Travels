import { Link } from "react-router-dom"
import "./navbar.css"
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
      <h1> <span className="logo">Global Tour And Travels</span></h1>
        <div className="navItems">
     <Link to='/register'>   <button className="navButton">Register</button> </Link>
        <button className="navButton">Login</button>  
        </div>
      </div>
    </div>
  )
}

export default Navbar