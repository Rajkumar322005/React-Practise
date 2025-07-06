import {useContext} from 'react'
import './Header.css'; // Assuming you have a CSS file for styling
import {cartContext} from '../../App.jsx';
const Product = (props) => {
  const { title, description, price, image } = props.product;
  const { cart, setCart } = useContext(cartContext);
  const addToCart = () => {
    setCart([...cart, props.product]);
  };
  const removeCart = () =>{
    setCart(cart.filter((item) => item.id !== props.product.id)); 

  }
  return (
    <div className="product-container">
      <img className="product-image" src={image} alt={title} />
      <h2 className='product-title'>{title}</h2>
      <p className='product-description'>{description}</p>
      <p className='product-price'>Buy: ${price.toFixed(2)}</p>
      {cart.includes(props.product)?(
        <button className='remove-from-cart-button' onClick={removeCart}>Remove from Cart</button>
      ):(
        <button className='add-to-cart-button' onClick={addToCart}>Add to Cart</button>
      )}
    </div>
  );
}

export default Product