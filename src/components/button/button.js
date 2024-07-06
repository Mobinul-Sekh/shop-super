import './button.scss'

function Button(props) {
  return (
    <div className='button' >
      <div className={`basic-button ${props.size || 'small'} ${props.color || 'gray'}`}>
        {props.icon && 
          <span className='button-icon'>{props.icon}</span>
        }
        {props.name && 
          <div
          onClick={props.onClick}
          type={props.type}
          > {props.name}
          </div>
        }
      </div>
    </div>
  )
}

export default Button
