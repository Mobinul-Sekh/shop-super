import './card.scss'

export default function Card(props) {
  return (
    <div className='card'>
      <img className={`card-image-basic ${props.type || 'horizontal-card'}`} src={props.image} alt='image'/>
      <div className={`${props.type}-content || -content`}>
        {props.title && <h2 className='card-content-title'>{props.title}</h2>}
        {props.desc && <p className='card-content-desc'>{props.desc}</p>}
      </div>
    </div>
  )
}
