import React from 'react'
import './product-card.scss'

function ProductCard(props) {
  console.log('\n\n','='.repeat(120), '\n');
  console.log(props);
  console.log('\n','='.repeat(120), '\n\n');
  return (
    <div className='product-card'>
      <img className='product-image' src={props.productImageSrc || 'images/image-product-1.png'} alt='image'/>
      <p className='product-title'>{props.productTitle || 'Product Title'}</p>
      <div className='product-desc'>
        <p className='product-type'>{props.productType || 'Product Type'}</p>
        <p className='product-price'>{props.productPrice || 'Product Price'}</p>
      </div>
    </div>
  )
}

export default ProductCard