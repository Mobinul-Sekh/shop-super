import Searchbar from "../searchbar/searchbar"
import Avatar from "../avatar/avatar"
import Button from "../button/button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import './header.scss'


function Header() {
  return (
    <div className='header-section'>
      <div className='search-bar'>
        <Searchbar placeholder='Search Brands, Products and More' />
      </div>
      <div className='cart-container'>
        <Button name='cart' size='small' icon=<FontAwesomeIcon icon={faCartArrowDown} color='gray' /> />
        <Avatar profilePicture='images/pp.jpeg'></Avatar>
      </div>
    </div>
  )
}

export default Header