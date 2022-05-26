import Header from "../../components/Header/Header"
import Footer from '../../components/Footer/Footer'
import Dropdown from '../../components/Dropdown/Dropdown'
import Carrousel from "../../components/Carrousel/Carrousel";

import './Accomodation.css';

import ratingFull from '../../assets/ratingFull.png'
import ratingEmpty from '../../assets/ratingEmpty.png'

// import accomodations from '../../Datas/accomodations.json';

// const accomodationsarray = accomodations

function Accomodation() {
    return (
    <>
        <Header />
        <Carrousel />
        <div className="section-information">
          <div className="location">
            <h1 className="title">Cozy loft on the Canal Saint-Martin</h1>
            <p>Paris, Île-de-France</p>
            <div className="section-tags">
              <div className="tag">Cosy</div>
              <div className="tag">Canal</div>
              <div className="tag">Paris 10</div>
            </div>
          </div>
          <div className="bl-host">
            <div className="host">
                <div className="name-host">  </div>
                <div className="picture-host"></div>
            </div>
            <div className="rating">
              <img alt='rating-full' className='rating-full' src={ratingFull} />
              <img alt='rating-full' className='rating-full' src={ratingFull} />
              <img alt='rating-full' className='rating-full' src={ratingFull} />
              <img alt='rating-empty' className='rating-empty' src={ratingEmpty} />
              <img alt='rating-empty' className='rating-empty' src={ratingEmpty} />
            </div>
          </div>
          
        </div>
        <Dropdown />
        <Footer />
    </>
    )

}

export default Accomodation





