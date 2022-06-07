import Collapse from '../../components/Collapse/Collapse'
import Carrousel from "../../components/Carrousel/Carrousel";
import Tag from '../../components/Tag/Tag'
import './Accomodation.css';
import ErrorPage from '../ErrorPage/ErrorPage'


import RatingFull from '../../assets/ratingFull.png'
import RatingEmpty from '../../assets/ratingEmpty.png'

import { useParams } from "react-router-dom";
import accomodations from "../../Datas/accomodations.json"

function Accomodation() {
  window.scrollTo(0, 0)
  const { id } = useParams(); // current page ID

  const currentAccomodation = accomodations.filter(accomodation => accomodation.id === id)[0]
  const arrayId = accomodations.map(accomodation => accomodation.id)

  
  if(!arrayId.includes(id)) {
    return (
      <ErrorPage />
    )
  }

  const ratingFull = [];
    for (let i = 0; i<currentAccomodation.rating; i++){
      ratingFull.push(<img alt='rating' className='rating-full' src={RatingFull} key={`ratingFull${i}`} />)
    }
  const ratingEmpty = [];
  for (let i = 0; i< 5-currentAccomodation.rating; i++){
    ratingFull.push(<img alt='rating' className='rating-empty' src={RatingEmpty} key={`ratingEmpty${i}`} />)
  }

  // console.log(currentAccomodation.rating)
  return (
  <>
      <Carrousel content={currentAccomodation.pictures}/>
      <div className="section-information">
        <div className="location">
          <h1 className="title">{currentAccomodation.title}</h1>
          <p className='city'>{currentAccomodation.location}</p>
          <section className="section-tags">
            <Tag content={currentAccomodation.tags}/>
          </section>
        </div>
        <div className="bl-host">
          <div className="host">
              <div className="name-host">{currentAccomodation.host.name}</div>
              <img className="picture-host" alt='host' src={currentAccomodation.host.picture}/>
          </div>
          <div className="rating">
            {ratingFull}
            {ratingEmpty}
          </div>
        </div>
        
      </div>
      <section className='section-collapse'>
        <Collapse content={currentAccomodation.description} title="Description" type="normal"/>
        <Collapse content={currentAccomodation.equipments} title="Équipements" type="normal"/>
      </section>
  </>
  )

}

export default Accomodation





