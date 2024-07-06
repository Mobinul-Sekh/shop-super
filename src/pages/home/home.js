import './home.scss'
import Button from '../../components/button/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignLeft, faMale, faFemale } from '@fortawesome/free-solid-svg-icons'
import SideBar from 'src/components/sidebar/sidebar'
import ProductCard from 'src/components/product-card/product-card'
import Header from 'src/components/header/header'

function Home(props) {
  return (
    <>
      <SideBar />
      <div className='home-page'>
        <Header />
        <section className='secondary-header-section'>
          <div className='page-heading'>{`${props.pageHeading || 'Explore'}`}</div>
          <div className='middle-three-button'>
            <Button name='All' size='small' icon=<FontAwesomeIcon icon={faAlignLeft} color='gray'/> />
            <Button name='Male' size='medium' icon=<FontAwesomeIcon icon={faMale } size='lg' color='gray'/> />
            <Button name='Female' size='medium' icon=<FontAwesomeIcon icon={faFemale} size='lg' color='gray'/> />
          </div>
          <Button name='Filter' size='large'/>
        </section>
        <hr/>
        <section className='product-section'>
          {
            [...Array(8).keys()].map((i) => (
              <div className='product {i}'>
                <ProductCard productImageSrc={`images/image-product-${i}.png`} />
              </div>
            ))
          }
        </section>
      </div>
    </>
  )
}

export default Home