import SideBar from '../features/ui/sidebar/sidebar';
import './home.scss'
// import Searchbar from '../features/ui/searchbar/searchbar';
// import Button from '../features/ui/button/button';
// import Card from '../features/ui/card/card';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

function Home() {
  return (
    <div className='home'>
      {/* <Searchbar placeholder="Search Brands, Products and More"/>
      <Button name="Cart" size='medium' icon=<FontAwesomeIcon icon={faCartArrowDown}/> /> */}
      {/* <Card type='vertical-card' title='summer sale' desc='variety collection' image='images/cloth4.jpg'/> */}
      <SideBar />
    </div>
  )
}

export default Home;