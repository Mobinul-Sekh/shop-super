import './cart.scss'
import { useState } from 'react'
// import Searchbar from '../../features/ui/searchbar/searchbar'
import SideBar from '../../components/sidebar/sidebar'
import CartCard from '../../components/cart-card/cart-card'
import Header from 'src/components/header/header';

export default function Cart() {
  const [ selectedPaymentOption, setSelectedPaymentOption ] = useState('1');

  function handleSelectedPaymentOption(option) {
    setSelectedPaymentOption(option)
  }

  return (
    <>
      <SideBar />
      <div className='cart-page'>
        <Header />
        <div className='cart-page-body'>
          <section className='left-section'>
            <div className='cart-items-container'>
              <h2>Products in your cart</h2>
              <hr></hr>
              <div className='cart-items-heading'>
                <div className='adjust-flex-container'>
                  <p></p>
                  <p>Product</p>
                </div>
                <p>Quantity</p>
                <p>Price</p>
                <p></p>
              </div>
              <ul className='cart-items'>
                <li className='cart-item'>
                  <CartCard productName="Product Name" productDetails="Product Details" productPrice="100"/>
                </li>
                <li className='cart-item'>
                  <CartCard productName="Product Name" productDetails="Product Details" productPrice="100"/>
                </li>
              </ul>
            </div>
          </section>
          <section className='right-section'>
            <div className='coupon-code'>
              <h2>Coupon Code</h2>
              <hr></hr>
              <input
                type='text'
                className='coupon-code-input'
                name='coupon-code-input'
                id='coupon-code-input'
                placeholder='Enter Coupon Code'
              />
              <button className='coupon-code-button' type='submit' formMethod='post'>Apply Your Coupon</button>
            </div>
            <div className='order-summary'>
              <h2>Order Summary</h2>
              <hr></hr>
              <ul className='order-summary-details'>
                <li className='order-summary-items'>
                  <p>Discount</p>
                  <p>Rs. 0</p>
                </li>
                <li className='order-summary-items'>
                  <p>Total</p>
                  <p>Rs. 0</p>
                </li>
              </ul>
            </div>
            <div className='payment-options'>
              <h2>Payment Options</h2>
              <hr></hr>
              <ul className='payment-options-details'>
                <li onClick={() => handleSelectedPaymentOption('1')} className={`payment-options-items ${selectedPaymentOption === '1' ? 'payment-option-selected' : ''}`}>
                  <img src='images/google-pay.png' alt='image' />
                </li>
                <li onClick={() => handleSelectedPaymentOption('2')} className={`payment-options-items ${selectedPaymentOption === '2' ? 'payment-option-selected' : ''}`}>
                  <img src='images/paytm.png' alt='image' />
                </li>
                <li onClick={() => handleSelectedPaymentOption('3')} className={`payment-options-items ${selectedPaymentOption === '3' ? 'payment-option-selected' : ''}`}>
                  <img src='images/debit-card.png' alt='image' />
                </li>
                <li onClick={() => handleSelectedPaymentOption('4')} className={`payment-options-items ${selectedPaymentOption === '4' ? 'payment-option-selected' : ''}`}>
                  <img src='images/bitcoin.png' alt='image' />
                </li>
              </ul>
              <button className='payment-options-button' type='submit' formMethod='post'>Check Out</button>
            </div>
          </section >
        </div>
      </div>
    </>
  )
}
