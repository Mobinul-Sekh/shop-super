import React from 'react'
import './product-card.scss'
import { useNavigate } from 'react-router-dom';

function ProductCard({productData}) {
  const navigate = useNavigate();
  const handleProductClick = () => {
    navigate('/product-details', { state: { productData } });
  }

  return (
    <div className='product-card'>
      <img 
        className='product-image' 
        src={productData.image || 'images/image-product-1.png'} 
        alt='product'
        onClick={handleProductClick}
      />
      <p className='product-title'>{productData.title || 'Product Title'}</p>
      <div className='product-desc'>
        <p className='product-type'>{productData.category || 'Product Type'}</p>
        <p className='product-price'>${productData.price || 'Product Price'}</p>
      </div>
    </div>
  )
}

export default ProductCard