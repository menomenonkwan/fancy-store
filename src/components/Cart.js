// Components
import Drawer from '@material-ui/core/Drawer';
import { Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CartItem from './CartItem';
// Styles
import { Empty, Wrapper, CartList, Checkout, useStyles } from './styles/Cart.styles';


const Cart = ({ cart, cartIsOpen, setCartIsOpen, addToCart, removeFromCart, deleteFromCart }) => {
  const classes = useStyles();
  const calculateTotal = () => {
    return cart.reduce((acc, cur) => 
    acc + (cur.amount * cur.price), 0).toFixed(2);
  }

  return (  
    <Drawer
      anchor='right'
      open={cartIsOpen}
      onClose={() => setCartIsOpen(false)}
      classes={{ paper: classes.paper }}
    >
      <Wrapper>
        <div>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => setCartIsOpen(false)}
          >continue shopping</Button>
          <h1>Cart Summary</h1>
        </div>
        
        {cart.length === 0
          ? <Empty><p>Your cart is empty.</p></Empty>
          : <CartList>
              {cart.map(product => (
                <CartItem 
                  product={product}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                  deleteFromCart={deleteFromCart}
                  key={product.id}
                />
              ))}
            </CartList>
        }

        <Checkout>
          <h2>Total: ${calculateTotal()}</h2>
          <Button endIcon={<ArrowForwardIcon />}>Checkout</Button>
        </Checkout>
      </Wrapper>
    </Drawer>
  );
}
 
export default Cart;


