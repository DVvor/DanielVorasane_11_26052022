import './Dropdown.css'

// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

function Dropdown() { 
  return (
  <>
    <div className='section-dropdown'>

      <div className='bl-dropdown'>
          <div className='btn-dropdown'>
            <span className='title-btn-dropdown'>Description</span>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>

          <div className='txt-dropdown'>Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied).
          </div>
      </div>

      <div className='bl-dropdown'>
          <div className='btn-dropdown'>
            <span className='title-btn-dropdown'>Équipements</span>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          <div className='txt-dropdown'>
            <ul className='equipments'>
              <li className='equipment'>Climatisation</li>
              <li className='equipment'>Wi-Fi</li>
              <li className='equipment'>Cuisine</li>
              <li className='equipment'>Fer à repasser</li>
              <li className='equipment'>Sèche-cheveux</li>
              <li className='equipment'>Cintres</li>
            </ul>
          </div>
      </div>

    </div>
      
  </>
		
		
	)
}

export default Dropdown