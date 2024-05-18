import SideBar from '../../features/ui/sidebar/sidebar';
import './home.scss'
import Searchbar from '../../features/ui/searchbar/searchbar';
import Button from '../../features/ui/button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faAlignLeft, faMale, faFemale } from '@fortawesome/free-solid-svg-icons'
import IWT from '../../features/ui/image-with-text/iwt';
import Avatar from '../../features/ui/avatar/avatar';

function Home(props) {
  return (
    <div className='home'>
      <div className='home-flex-container'>
        <SideBar />
        <div className='column-flex'>
          <div className='top-bar'>
            <div className='search-bar'>
              <Searchbar placeholder='Search Brands, Products and More' />
            </div>
            <div className='top-button'>
              <Button name='cart' size='small' icon=<FontAwesomeIcon icon={faCartArrowDown} color='gray' /> />
            </div>
            <div className='profile-avatar'>
              <Avatar profilePicture='images/pp.jpeg'></Avatar>
            </div>
          </div>
          <div className='secondary-top-bar'>
            <div className='page-heading'>{`${props.pageHeading || 'Explore'}`}</div>
            <div className='middle-three-button'>
              <Button name='All' size='small' icon=<FontAwesomeIcon icon={faAlignLeft} color='gray'/> />
              <Button name='Male' size='medium' icon=<FontAwesomeIcon icon={faMale } size='lg' color='gray'/> />
              <Button name='Female' size='medium' icon=<FontAwesomeIcon icon={faFemale} size='lg' color='gray'/> />
            </div>
            <div className='filter-button'>
              <Button name='Filter' size='large'/>
            </div>
          </div>
          <hr/>
          <div className='page-elements'>
            <div className='left-container'>
              <div className='left-container-first-section'>
                <IWT type='horizontal-image' image='images/season-sale.jpg' title='summer sale' desc='too tiring'></IWT>
                <IWT type='horizontal-image' image='images/bag0.jpg' title='summer sale' desc='too tiring'></IWT>
              </div>
              <div className='left-container-second-section'>
                <IWT className='half1' type='square-image' image='images/shoe3.jpg' title='summer sale' desc='too tiring'></IWT>
                <IWT className='half2' type='square-image' image='images/shoe.jpg' title='summer sale' desc='too tiring'></IWT>
              </div>
            </div>
            <div className='right-container'>
              <div className='right-container-first-section'>
                <IWT className='half1' type='vertical-image' image='images/cloth4.jpg' title='summer sale' desc='too tiring'></IWT>
                <IWT className='half2' type='vertical-image' image='images/shoe2.jpg' title='summer sale' desc='too tiring'></IWT>
              </div>
              <div className='right-container-second-section'>
                <IWT type='horizontal-image' image='images/cloth3.jpg' title='summer sale' desc='too tiring'></IWT>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;