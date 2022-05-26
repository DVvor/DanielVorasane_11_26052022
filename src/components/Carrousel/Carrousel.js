import './Carrousel.css'
import imgCarrousel from '../../assets/img-carrousel.png'

function Carrousel() { 
  return (
		<div className='carroussel'>
			<img alt='cover' className='cover' src={imgCarrousel} />
		</div>
	)
}

export default Carrousel