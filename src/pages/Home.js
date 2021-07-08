import { NavLink } from 'react-router-dom';
// Components
import { Button } from '@material-ui/core';
import SocialMedia from '../components/SocialMedia';
import Categories from '../components/Categories';
// Styles
import Background from '../assets/pexels-porapak-apichodilok-346752.jpg'
import { Container, Wrapper } from './styles/Home.styles';
import { containerVariants } from '../assets/pageTransition';


const Home = () => {
  return (  
    <Container
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{backgroundImage: `url(${Background})`}}
    >
      <Wrapper>
        <div>
          <h2>Summer Collection 2022</h2>
          <h1>Get up to 50% off New Arrivals</h1>
          <NavLink to="/shop">
            <Button>Shop Now</Button>
          </NavLink>
        </div>
      </Wrapper>
      
      <Categories />
      <SocialMedia />
    </Container>
  );
}
 
export default Home;