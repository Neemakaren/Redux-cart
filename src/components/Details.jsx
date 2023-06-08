import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

// import { client, urlFor } from '../../lib/client';
// import { Product } from '../../components';
// import { useStateContext } from '../../context/StateContext';

const Details = () => {
//   const { image, name, details, price } = product;
//   const [index, setIndex] = useState(0);
//   const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

//   const handleBuyNow = () => {
//     onAdd(product, qty);

//     setShowCart(true);
//   }

  return (
    <div className='main-container'>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src='' className="product-detail-image" />
          </div>
          <div className="small-images-container">
              <img 
                src='' 
              />
           
          </div>
        </div>

        <div className="product-detail-desc">
          <h1></h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>
              (20)
            </p>
          </div>
          <h4>Details: </h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Reprehenderit nesciunt impedit officia illo omnis veritatis, 
            commodi, cupiditate sed at, quas fugiat quaerat repudiandae iste
             a aliquam temporibus hic? Aliquid, hic consectetur magni minima
              repellendus tempora velit aliquam dignissimos architecto veniam 
              nihil nostrum ullam deserunt eos, dolor, consequatur nisi incidunt 
              ipsa dolorum officiis consequuntur? Eum id earum iste nobis eveniet 
              repudiandae beatae ratione! Harum nisi, ducimus adipisci sit, dolore 
              iure illo blanditiis sapiente expedita consequuntur voluptas quod ut tempora totam eos?</p>
          <p className="price">$</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus"><AiOutlineMinus /></span>
              <span className="num"></span>
              <span className="plus"><AiOutlinePlus /></span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart">Add to Cart</button>
            <button type="button" className="buy-now">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
          <h2>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
            </div>
          </div>
      </div>
    </div>
  )
}

// export const getStaticPaths = async () => {
//   const query = `*[_type == "product"] {
//     slug {
//       current
//     }
//   }
//   `;

//   const products = await client.fetch(query);

//   const paths = products.map((product) => ({
//     params: { 
//       slug: product.slug.current
//     }
//   }));

//   return {
//     paths,
//     fallback: 'blocking'
//   }
// }

// export const getStaticProps = async ({ params: { slug }}) => {
//   const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
//   const productsQuery = '*[_type == "product"]'
  
//   const product = await client.fetch(query);
//   const products = await client.fetch(productsQuery);

//   console.log(product);

//   return {
//     props: { products, product }
//   }
// }

export default Details