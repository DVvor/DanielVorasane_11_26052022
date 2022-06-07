import { useState } from 'react'
import './Collapse.css'

// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'


function Collapse({content, title, type }) {
  const [isOpen, setIsOpen] = useState(false)
  // const open = false
  // console.log(isOpen)

  function openCollapse() {
    setIsOpen(!isOpen)
  
  }
  return (
  <>
      <div className={`bl-collapse ${type}`}>
          <div className='bl-title-collapse' onClick={openCollapse}>
            <p className='title-btn-collapse'>{title}</p>
            {isOpen && 
              <FontAwesomeIcon icon={faAngleUp} />
            }
            {!isOpen &&
              <FontAwesomeIcon icon={faAngleDown} />
            }
          </div>

        {isOpen &&
          <div className='txt-collapse'>
            {typeof content != "string" ?
                <ul className='equipments'>
                    {content.map((equipment, index) => <li  className='equipment' key={`${equipment}-${index}`}>{equipment}</li>)}
                </ul> : <p>{content}</p>
            }
          </div>
        }

      </div>

  </>
		
		
	)
}

export default Collapse
