import './button.scss'

function Button(props) {
  return (
    <div className='button' >
      <div className={`basic-button ${props.size || 'small'} ${props.className || 'gray'}`}>
        {props.icon && 
          <span className='button-icon'>{props.icon}</span>
        }
        <div
          onClick={props.onClick}
          type={props.type}
        > {props.name || "button"}
        </div>
      </div>
    </div>
  )
}

export default Button
