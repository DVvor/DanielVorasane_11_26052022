import { useState } from 'react'
import './Carrousel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

function Carrousel({content}) {
	const [index, setIndex] = useState(0) 
	// (0) compteur initial
	// setIndex permet de modifier l'index
	
	const currentPicture = content[index]
	// console.log(content, currentPicture)

	function nextPicture() {
		if(index === content.length -1) {
			setIndex(0)
		} else {
			setIndex(index + 1)
		}
	}
	// lenght -1 car la longueur commence à zéro et non à 1

	function previousPicture() {
		console.log(index)
		if(index === 0) {
			setIndex(content.length -1)
		} else {
			setIndex(index - 1)
		}
	}
	// 	currentMediaIndex -= 1
  // if (currentMediaIndex < 0) {
  //   currentMediaIndex = mediasPhotographer.length - 1
  // }

  return (
		<>
			<div className='carroussel'>
				<img alt='cover' className='picture' src={currentPicture} />
				
				{content.length > 1 &&
					<div className='chevron'>
						<FontAwesomeIcon icon={faChevronLeft} className="previous" onClick={previousPicture}/>
						<FontAwesomeIcon icon={faChevronRight} className="next" onClick={nextPicture}/>
					</div>
				}
				{content.length > 1 && 
					<p className='counter'>{`${index} / ${content.length}`}</p>
				}
			</div>

		</>
		

	)
}

export default Carrousel