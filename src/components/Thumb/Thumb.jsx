import './Thumb.css'
import { useNavigate } from "react-router-dom"

function Thumb(props) {
  const {title , id, cover} = props
  const navigate = useNavigate() // permet d'utiliser une fonction de redirection - naviguer entre les pages

  function accomodationPage() {

    navigate(`/accomodation/${id}`)  // Lien url accomodation
  }
  return (
      <div className='thumb' onClick={accomodationPage}>
        <h2>{title}</h2>
        <img className='cover' alt='img-accomodation' src={cover}/>

      </div>
      
    )
}

export default Thumb