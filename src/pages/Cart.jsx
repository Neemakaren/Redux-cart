import React, { useRef } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import Details from '../components/Details';


const Cart = () => {
  

  
  return (
    <Details />
    // <div className="cart-wrapper">
    //   <div className="cart-container">
    //     <button
    //     type="button"
    //     className="cart-heading">
    //       <AiOutlineLeft />
    //       <span className="heading">Your Cart</span>
    //       <span className="cart-num-items"> items</span>
    //     </button>

  
    //       <div className="empty-cart">
    //         <AiOutlineShopping size={150} />
    //         <h3>Your shopping bag is empty</h3>
    //         {/* <Link href="/"> */}
    //           <button
    //             type="button"
    //             className="btn"
    //           >
    //             Continue Shopping
    //           </button>
    //         {/* </Link> */}
    //       </div>
      

    //     <div className="product-container">
    //         <div className="product">
    //           <img className="cart-product-image" />
    //           <div className="item-desc">
    //             <div className="flex top">
    //               <h5></h5>
    //               <h4>$</h4>
    //             </div>
    //             <div className="flex bottom">
    //               <div>
    //               <p className="quantity-desc">
    //                 <span className="minus">
    //                 <AiOutlineMinus />
    //                 </span>
    //                 <span className="num" onClick=""></span>
    //                 <span className="plus" ><AiOutlinePlus /></span>
    //               </p>
    //               </div>
    //               <button
    //                 type="button"
    //                 className="remove-item"
    //               >
    //                 <TiDeleteOutline />
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //     </div>
    //       <div className="cart-bottom">
    //         <div className="total">
    //           <h3>Subtotal:</h3>
    //           <h3>$</h3>
    //         </div>
            // <div className="btn-container">
            //   <button type="button" className="btn">
            //     Pay with Stripe
            //   </button>
            // </div>
    //       </div>
    //   </div>
    // </div>
  )
}

export default Cart