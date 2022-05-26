import './Banner.css'
import banner from '../../assets/banner.png'

function Banner() { 
  return (
		<div className='banner'>
			<img alt='banner' className='img-banner' src={banner} />
      <h1>Chez vous, partout ailleurs</h1>
      
		</div>
	)
}

export default Banner