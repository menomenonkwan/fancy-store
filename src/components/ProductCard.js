import styled from 'styled-components';
// Components
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { Button, makeStyles } from '@material-ui/core';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const useStyles = makeStyles({
  card: {
    textAlign: 'center',
    padding: '1rem'
  },
  heading: {
    paddingBottom: 0,
    subheader: {
    },
    "& .MuiCardHeader-title": {
      fontFamily: 'inherit',
      fontSize: '1.2rem',
    },
  },
  button: {
    width: '100%',
    backgroundColor: 'var(--black, black);',
    color: 'var(--white, white);',
    '&:hover': {
      backgroundColor: 'var(--secondary, brown)',
    }
  },
})

const Wrapper = styled.div`
  img {
    width: 100%;
    -o-object-fit: cover;
       object-fit: cover;
    border-radius: 20px 20px 0 0;
  }
  h3 {
    padding: 1rem;
    font-size: 2rem;
    color: var(--secondary, brown);
  }
`;

const ProductCard = ({ product, addToCart }) => {
  const classes = useStyles();
  const { image, title, price } = product;

  return (  
    <Wrapper>
      <Card elevation={5} className={classes.card}>
        <img src={image} alt={title}/>
        <CardHeader className={classes.heading}
          title={title}
          // subheader={category}
        />
        <h3>${price.toFixed(2)}</h3>
        <Button className={classes.button}
          startIcon={<ShoppingBasketIcon />}
          onClick={() => addToCart(product)}
        >Add To Cart</Button>
      </Card>
    </Wrapper>
  );
}
 
export default ProductCard;