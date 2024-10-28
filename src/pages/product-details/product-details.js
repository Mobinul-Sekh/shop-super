import Header from 'src/components/header/header'
import './product-details.scss'
import SideBar from 'src/components/sidebar/sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router-dom';

function ProductDetails() {
  const location = useLocation()
  const { productData } = location.state || {};
  
  return (
    <>
      <SideBar />
      <div className='product-details-page'>
        <Header />
        <div className='product-details'>
          <img src={productData.image || 'images/image-product-1.png'} alt='image'/>
          <section className='details-section'>
            <div className='details-container'>
              <p className='product-title'>{productData.title || 'Product Title'}</p>
              <p className='product-desc'>{
                productData.description || 
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor elit sed vulputate mi sit. Sed cras ornare arcu dui vivamus arcu. Elementum nisi quis eleifend quam adipiscing vitae. Ut sem viverra aliquet eget sit amet. Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Facilisis gravida neque convallis a cras. Pellentesque elit eget gravida cum sociis natoque penatibus. Dui sapien eget mi proin sed libero enim sed faucibus.'
              }</p>
              <p className='product-rating'>{productData.rating.rate || '5.0'} <FontAwesomeIcon icon={faStar} size='xs' /></p>
              <p className='product-price'>₹{productData.price || '1700'}</p>
            </div>
            <div className='action-buttons'>
              <button type='submit' formMethod='post'>Add to Cart</button>
              <button type='submit' formMethod='post'>Buy Now</button>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default ProductDetails