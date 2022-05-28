import './Carrousel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

function Carrousel({content}) {
	const currentPicture = content[0]
	console.log({content}, currentPicture)

	function nextPicture() {
		
	}

  return (
		<>
			<div className='carroussel'>
				<img alt='cover' className='picture' src={currentPicture} />
				
				<FontAwesomeIcon icon={faChevronLeft} className="previous" />
				<FontAwesomeIcon icon={faChevronRight} className="next" onClick={nextPicture}/>

			</div>

		</>
		

	)
}

export default Carrousel