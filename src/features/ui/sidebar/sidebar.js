import './sidebar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye, faBoltLightning, faStar, faSignOut } from '@fortawesome/free-solid-svg-icons'

function SideBar() {
  return (
    <>
      <div className='sidebar'>
        <h2 className='brand-name'>ShopSuper</h2>
        <ul className='sidebar-list'>
          <li>
            <FontAwesomeIcon icon={faBullseye}/>
            <p>Popular Brands</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faBoltLightning}/>
            <p>Explore</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faStar}/>
            <p>Special for you</p>
          </li>
        </ul>
        <div className='logout-text'>
          <FontAwesomeIcon icon={faSignOut}/>
          <p>logout</p>
        </div>
      </div>
    </>
  )
}

export default SideBar