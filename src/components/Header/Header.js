import './Header.css'
import logo from '../../assets/logo.png'

function Header() { 
  return (
		<div className='kasa-header'>
			<img alt='logo' className='logo-header' src={logo} />
      <div className='nav-header'>
        <div className='button-header'>Accueil</div>
        <div className='button-header'>A propos</div>
      </div>
      
		</div>
	)
}

export default Header