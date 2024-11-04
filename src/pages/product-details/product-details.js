import Header from 'src/components/header/header'
import './product-details.scss'
import SideBar from 'src/components/sidebar/sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router-dom';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ProductDetails() {
  const navigate = useNavigate();
  const [isProductAddedToCart, setIsProductAddedToCart] = useState(false);

  const location = useLocation();
  const { productData } = location.state || {};
  if (!productData.title || !productData.description || !productData.price || !productData.rating) {
    throw new Error('Invalid product data');
  }
  
  const addProductToCart = () => {
    fetch('http://localhost:5000/cart/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        productId: productData.id,
        productImage: productData.image,
        productName: productData.title,
        productCategory: productData.category,
        productDetails: productData.description,
        productQty: 1,
        productTotalPrice: productData.price
      })
    })
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result)
        alert(result.message)
        if (result.success) {
          setIsProductAddedToCart(true)
        }
      },
      (error) => {
        console.log(error)
        throw new Error("Some Error Occurred")
      }
    )
  }

  const handleGoToCart = () => {
    navigate('/cart');
  }
  
  return (
    <>
      <SideBar />
      <div className='product-details-page'>
        <Header />
        <div className='product-details'>
          <img src={productData.image || 'images/image-product-1.png'} alt='product'/>
          <section className='details-section'>
            <div className='details-container'>
              <p className='product-title'>{ productData.title }</p>
              <p className='product-desc'>{ productData.description }</p>
              <div className='rating-container'>
                <p className='product-rating'>{ productData.rating.rate } <FontAwesomeIcon icon={faStar} size='xs' /></p>
                <p className='product-rating-count'>{productData.rating.count} Ratings</p>
              </div>
              <p className='product-price'>${ productData.price }</p>
            </div>
            <div className='action-buttons'>
              { 
                isProductAddedToCart ?
                <button onClick={handleGoToCart}>Go to Cart</button>
                :
                <button type='submit' formMethod='post' onClick={addProductToCart}>Add to Cart</button> 
              }
              <button type='submit' formMethod='post'>Buy Now</button>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default ProductDetails