import './avatar.scss'

export default function Avatar(props) {
  const defaultImage = 'https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-20.jpg';
  return (
    <div className='avatar'>
      <img className='avatar-img' src={props.profilePicture || defaultImage} alt='image'/>
    </div>
  )
}
