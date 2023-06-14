import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <h1>Judge Judy Mood Tracker</h1>
      <nav className="nav-bar">
        <ul>
          <li>{/* <Link to="/login">Login</Link> */}</li>
        </ul>
      </nav>
    </>
  )
}
