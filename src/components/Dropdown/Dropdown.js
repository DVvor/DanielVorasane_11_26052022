import './Dropdown.css'

// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'


function Dropdown({content, title }) {
  function openDropdown() {
    console.log('✨ Ceci est un clic ✨')
  }
  return (
  <>
    <div className='bl-dropdown'>
        <div className='btn-dropdown' onClick={openDropdown}>
          <span className='title-btn-dropdown'>{title}</span>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>

        <div className='txt-dropdown'>
          {typeof content != "string" ?
              <ul className='equipments'>
                  {content.map((equipment, index) => <li  className='equipment' key={`${equipment}-${index}`}>{equipment}</li>)}
              </ul> : <p>{content}</p>
          }
        </div>
    </div>
  </>
		
		
	)
}

export default Dropdown
