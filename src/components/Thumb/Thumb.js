import './Thumb.css'
// import accomodations from '../../Datas/accomodations.json';

function Thumb(data) { 

  const { title } = data
  return (
      <div className='thumb'>
        <h2>{title}</h2>
        {/* <img>{cover}</img> */}
      </div>
      
    )
}

export default Thumb