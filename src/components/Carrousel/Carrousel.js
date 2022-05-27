import './Carrousel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

function Carrousel({content}) {
	const currentPicture = content[0]
	console.log({content}, currentPicture)

  return (
		<>
			<div className='carroussel'>
				<img alt='cover' className='picture' src={currentPicture} />
				
				<FontAwesomeIcon icon={faChevronLeft} className="previous" />
				<FontAwesomeIcon icon={faChevronRight} className="next" />

			</div>

		</>
		

	)
}

export default Carrousel