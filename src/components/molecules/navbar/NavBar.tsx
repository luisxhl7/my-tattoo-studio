import { Link } from 'react-router-dom'
import './navBar.scss'
import images from '../../../assets'

export const NavBar = () => {
  return (
    <nav className='navBar'>
      <Link to='/'><img src={images.icono_tattoo} alt="" width={70} height={70}/></Link>
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
