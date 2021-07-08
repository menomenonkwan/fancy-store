import { useState } from 'react';
import { useQuery } from 'react-query';
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
// Components
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Department from './pages/Department';
import NotFound from './pages/NotFound';
import Cart from './components/Cart';
// Styles
import GlobalStyle from './theme/globalStyles';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  flex: 1;
  min-height: 90vh;
  margin-top: 10vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const getProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return data
      .filter(product => product.category !== 'electronics')
      .sort((a, b) => {
        const categoryA = a.category.toUpperCase();
        const categoryB = b.category.toUpperCase();
        if (categoryA > categoryB) { return -1 }
        if (categoryA < categoryB) { return 1 }
        return 0;
      });
}

function App() {
  const location = useLocation();
  const [cart, setCart] = useState([]);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const { data, isLoading, error } = useQuery('products', getProducts);


  const countCartItems = () => {
    const count = cart.reduce((acc, cur) => {
      return cur.amount + acc;
    }, 0);

    return count;
  }

  const addToCart = (product) => {
    setCart(prevState => {
      const isInCart = prevState.find(cartItem => cartItem.id === product.id);
      if (isInCart) {
        return prevState.map(cartItem => cartItem.id === product.id 
          ? { ...cartItem, amount: cartItem.amount + 1 }
          : { ...cartItem })
      } 
      
      return [ ...cart, { ...product, amount: 1 } ];
    });
  }

  const removeFromCart = (id) => {
    setCart(prevState => {
      return prevState.reduce((acc, cur) => {
        if (cur.id === id) {
          if (cur.amount === 1) return acc;
          return [ ...acc, { ...cur, amount: cur.amount - 1 } ];
        }
        return [ ...acc, cur ];
      }, []);
    });
  }

  const deleteFromCart = (id) => {
    setCart(prevState => {
      return prevState.reduce((acc, cur) => {
        if (cur.id === id) return acc;

        return [ ...acc, cur ];
      }, []);
    });
  }

  return (
    <Container>
      <GlobalStyle />
      <Header 
        setCartIsOpen={setCartIsOpen} 
        countCartItems={countCartItems}
      />

      <Cart 
        cart={cart} 
        cartIsOpen={cartIsOpen} 
        setCartIsOpen={setCartIsOpen} 
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        deleteFromCart={deleteFromCart}
      />

      <Wrapper>
        <AnimatePresence exitBeforeEnter> 
          <Switch location={location} key={location.key}>
            <Route exact path="/the-clothing-store/" component={Home} />
            <Route path="/the-clothing-store/shop">
              <Shop products={data} addToCart={addToCart} isLoading={isLoading} error={error}/>
            </Route>
            <Route path="/the-clothing-store/contact" component={Contact} />
            <Route path="/the-clothing-store/department/:department">
              <Department products={data} addToCart={addToCart} isLoading={isLoading} error={error}/>
            </Route>
            <Route component={NotFound} />
          </Switch>
        </AnimatePresence>
      </Wrapper>

      <Footer />
    </Container>
  );
}

export default App;
