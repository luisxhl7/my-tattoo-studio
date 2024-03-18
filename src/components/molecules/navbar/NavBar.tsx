import { Link } from 'react-router-dom'
import './navBar.scss'

export const NavBar = () => {
  return (
    <nav className='navBar'>
      <ul>
        <li>
          <Link to='/'>home</Link>
        </li>
        <li>
          <Link to='/'>Historia</Link>
        </li>
        <li>
          <Link to='/'>wepa</Link>
        </li>
        <li>
          <Link to='/'>dios</Link>
        </li>
        <li>
          <Link to='/'>amen</Link>
        </li>
      </ul>
    </nav>
  )
}
