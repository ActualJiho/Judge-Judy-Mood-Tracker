import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [click, setClick] = useState(false)
  const handleClick = () => {
    setClick(!click)
  }
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <i className="fab fa-typo3"></i>
          </Link>
          <div>
            <i className={click ? '' : ''}></i>
          </div>
        </div>
      </nav>
    </>
  )
}
