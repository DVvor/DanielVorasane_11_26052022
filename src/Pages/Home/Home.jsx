import './Home.css'
import CoverHome from '../../assets/cover-home.png'


import Banner from "../../components/Banner/Banner"
import Thumb from "../../components/Thumb/Thumb"

import accomodations from '../../Datas/accomodations.json';



function Home() {
  
  return (
  <>
      <Banner cover={CoverHome} title="Chez vous, partout ailleurs"/>

      <div className='gallery'>
    {accomodations.map( accomodation => (
      <Thumb key={accomodation.id} id={accomodation.id} title={accomodation.title} cover={accomodation.cover} />
    ))
    }
      </div>
  </>
  )

}

export default Home

