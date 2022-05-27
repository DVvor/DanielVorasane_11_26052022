import './Header.css'
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom'

function Header() { 
  return (
		<div className='kasa-header'>
			<img alt='logo' className='logo-header' src={logo} />
      <div className='nav-header'>
        <Link to="/" className='button-header'>Accueil</Link>
        <Link to="/About" className='button-header'>A propos</Link>
      </div>
      
		</div>
	)
}

export default Header