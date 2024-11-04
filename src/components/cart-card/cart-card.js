import { useState } from 'react'
import './cart-card.scss'
import QtyInput from '../qty-input/qty-input'
import { mdiDelete } from '@mdi/js'
import Icon from '@mdi/react'
import Button from '../button/button'

export default function CartCard(props) {
  const [qtyValue, setQtyValue] = useState(1);
  const total = Number(props.productPrice)*(qtyValue);
  
  function handleQtyChange(qty) {
    setQtyValue(qty);
  }

  return (
    <div className='cart-card'>
      <div className='cart-card-image-details'>
        <img className='cart-card-image' src={props.productImage || 'images/dummy-cart-image.jpeg'} alt='cart-product'/>
        <div className='cart-card-item-details'>
          <p className='cart-card-item-name'>{props.productName}</p>
          <p className='cart-card-item-category'>{props.productCategory}</p>
        </div>
      </div>
      <div className='cart-card-item-qty'>
        <QtyInput onQtyChange={handleQtyChange}/>
      </div>
      <p className='cart-card-item-price' type='number'>Rs. {total}</p>
      {/* <Icon path={mdiDeleteOutline} size={1} color='black' /> */}
      <div className='cart-card-item-button'>
        <Button size='small' icon=<Icon path={mdiDelete} size={1} color='black' /> />
      </div>
    </div>
  )
} 
