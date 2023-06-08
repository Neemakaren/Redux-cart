import { useEffect, useState} from 'react';
import axios from 'axios'
import img from '../assets/pic-1.webp'
import { useSelector } from 'react-redux';



const Products = () => {
const products = useSelector(state => state.product)

console.log(products)

  const renderedPosts = products.map((item) => (
    <div className='main-container'>
      <div className="product-card">
      <img 
            src={img}
            width={250}
            height={250}
            className="product-image"
          />
           <p className="product-name">{item.name}</p>
          <p className="product-price">${item.price}</p>
          {/* <button type="button" className="add-to-cart">Add to Cart</button> */}
          <div className="buttons">
            <button type="button" className="add-to-cart">Add to Cart</button>
          </div>
      </div>
    </div>
  ))

  // const [product, setProduct] = useState([])


  // useEffect(() => {
  //   axios.get('https://fakestoreapi.com/products')
  //   .then((response) => {
  //     setProduct(response)
  //     console.log(response)
  //   })
  // },[])

  return (
    <>
    <div className='product'>{renderedPosts}</div>
    </>
  )
}

export default Products