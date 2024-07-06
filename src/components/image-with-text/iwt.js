import './iwt.scss'

export default function IWT(props) {
  return (
    <div className='iwt'>
      <img className={`iwt-basic ${props.type || 'square-image'}`} src={props.image} alt='image'/>
      <div className='overlay-text'>
        {props.title && <div className='overlay-title'>{props.title}</div>}
        {props.desc && <div className='overlay-desc'>{props.desc}</div>}
      </div>
    </div>
  )
}
