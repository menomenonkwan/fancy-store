import styled from 'styled-components';
import { motion } from "framer-motion";
// Components
import ProductCard from "../components/ProductCard";
import Categories from "../components/Categories";
import LinearProgress from '@material-ui/core/LinearProgress';
// Styles
import Masonry from 'react-masonry-css';
import { containerVariants } from '../assets/pageTransition';

const Wrapper = styled(motion.div)`
  max-width: 100%;
  padding: 0 10%;
  @media (max-width: 700px) {
    margin-top: 2rem;    
  }
`;


const Shop = ({ products, addToCart, isLoading, error }) => {

  const breakpoints = {
    default: 4,
    1100: 3,
    800: 2,
    500: 1,
  }

  if (isLoading) return <LinearProgress />
  if (error) return <div>Oh no! Something went wrong. Sorry about that, buddy...</div>

  return (      
    <Wrapper 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Categories />
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {products?.map(product => (
          <div key={product.id}>
            <ProductCard product={product} addToCart={addToCart} />
          </div>
        ))}
      </Masonry>
    </Wrapper>
  );
}

export default Shop;