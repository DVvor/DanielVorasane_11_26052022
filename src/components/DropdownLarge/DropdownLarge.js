import './DropdownLarge.css'

// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

function DropdownLarge() { 
  return (
		<div className='bl-dropdownLarge'>
			<div className='btn-dropdownLarge'>
				<span className='title-btn-dropdownLarge'>Fiabilité</span>
      	<FontAwesomeIcon icon={faAngleDown} />
			</div>
			<div className='txt-dropdownLarge'>
			La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
			</div>
		</div>
		
	)
}

export default DropdownLarge