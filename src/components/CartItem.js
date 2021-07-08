// Components
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
// Styles
import { Wrapper, Controls } from './styles/CartItem.styles';

const CartItem = ({ product, addToCart, removeFromCart, deleteFromCart }) => {
  const { image, title, id, amount, price } = product;
  const totalAmount = (price * amount).toFixed(2);

  return (  
    <Wrapper elevation={5}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <Controls elevation={1}>
        <IconButton className="delete" onClick={() => deleteFromCart(id)}>
          <HighlightOffIcon />
        </IconButton>
        <div>
          <IconButton onClick={() => removeFromCart(id)}>
            <RemoveIcon />
          </IconButton>
          <p>{amount}</p>
          <IconButton onClick={() => addToCart(product)}>
            <AddIcon />
          </IconButton>
          <h3>${totalAmount}</h3>
        </div>
      </Controls>
    </Wrapper>
  );
}
 
export default CartItem;