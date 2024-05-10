import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import './searchbar.scss'

function Searchbar(props) {
  return (
    <div className='search'>
      <div className='search-bar'>
        <span className='search-icon'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
        <input
          type='search'
          className='search-input'
          name='search-input'
          id='search-input'
          placeholder={props.placeholder}
        />
      </div>
    </div>
  )
}

export default Searchbar