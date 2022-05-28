import './Banner.css'

function Banner({cover, title}) { 
  return (
		<div className='banner'>
			{ }
			<img alt='banner' className='img-banner' src={cover} />
      <h1 className='title-banner'> {title}</h1>
      
		</div>
	)
}

export default Banner