import './home.scss'
import Button from '../../components/button/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignLeft, faMale, faFemale } from '@fortawesome/free-solid-svg-icons'
import SideBar from 'src/components/sidebar/sidebar'
import ProductCard from 'src/components/product-card/product-card'
import Header from 'src/components/header/header'
import { useEffect, useState } from 'react'

function Home(props) {
  const [productData, setProductData] = useState([])
  const [infiniteProducts, setInfiniteProducts] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:5000/product/findAll`)
    .then(res => res.json())
    .then(
      (result) => {
        setProductData(result.data)
        setInfiniteProducts(result.data);
        setLoading(false)
      },
      (error) => {
        setError(error)
        setLoading(false)
      }
    )
  }, [])

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    // Check if the user has scrolled close to the bottom of the page
    if (scrollHeight < 25000 && scrollTop + clientHeight >= scrollHeight - 5 && !loading) {
      setInfiniteProducts((prevProducts) => [...prevProducts, ...productData]);
    }
  };

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
            infiniteProducts && infiniteProducts.map((product) => (
              <div className='product'>
                <ProductCard productData={product} />
              </div>
            ))
          }
          {loading && <p>Loading more products...</p>}
        </section>
      </div>
    </>
  )
}

export default Home