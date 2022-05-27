import './Tag.css'

function Tag({content}) {

  return (
    <>
      {content.map((tag, index) => <div  className='tag' key={`${tag}-${index}`}>{tag}</div>)}
    </>

  )
}

export default Tag
