import './sidebar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye, faBoltLightning, faStar, faSignOut, faShop } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function SideBar() {
  const [expendSideBar, setExpendSideBar] = useState(false)
  const [selectedItem, setSelectedItem] = useState('2')

  function handleExpendBehavior() {
    setExpendSideBar((expendSideBar) => !expendSideBar)
  }
  function handleSelectedItem(item) {
    setSelectedItem(item)
  }

  return (
    <>
      <div className={`sidebar ${expendSideBar ? '' : 'sidebar-shrink'}`} >
        { expendSideBar && <h2 className='brand-name' onClick={handleExpendBehavior}>ShopSuper</h2> }
        { !expendSideBar && <FontAwesomeIcon className='brand-logo' onClick={handleExpendBehavior} icon={faShop} size='xl'/> }
        <ul className='sidebar-list'>
          <li onClick={() => handleSelectedItem('1')} className={selectedItem === '1' ? `select-option ${ expendSideBar ? '' : 'select-option-shrink'}` : ''}>
            <FontAwesomeIcon icon={faBullseye}/>
            { expendSideBar && <p>Popular Brands</p> }
          </li>
          <li onClick={() => handleSelectedItem('2')} className={selectedItem === '2' ? `select-option ${ expendSideBar ? '' : 'select-option-shrink'}` : ''}>
            <FontAwesomeIcon icon={faBoltLightning}/>
            { expendSideBar && <p>Explore</p> }
          </li>
          <li onClick={() => handleSelectedItem('3')} className={selectedItem === '3' ? `select-option ${ expendSideBar ? '' : 'select-option-shrink'}` : ''}>
            <FontAwesomeIcon icon={faStar}/>
            { expendSideBar && <p>Special for you</p> }
          </li>
        </ul>
        <div className='logout-text'>
          <FontAwesomeIcon icon={faSignOut}/>
          { expendSideBar && <p>logout</p> }
        </div>
      </div>
    </>
  )
}

export default SideBar