import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { motion } from "framer-motion";
import { categories } from '../assets/categories';
// Components
import Masonry from 'react-masonry-css';
import ProductCard from "../components/ProductCard";
import LinearProgress from '@material-ui/core/LinearProgress';
import NotFound from './NotFound';
// Styles
import { containerVariants } from '../assets/pageTransition';

const Wrapper = styled(motion.div)`
  max-width: 100%;
  padding: 0 10%;

  h2 {
    text-align: center;
    font-size: 2.25rem;
    padding: 2rem;
    text-transform: uppercase;
  }

  @media (max-width: 700px) {
    margin-top: 4rem;
  }  
`;


const Department = ({ products, addToCart, isLoading, error }) => {
  const { department } = useParams();
  const [deptProducts, setDeptProducts] = useState([]);

  useEffect(() => {
    if(!products) { return; }
    setDeptProducts(() => {
      return products.filter(product => product.category === department);
    })
  }, [department, products])

  const breakpoints = {
    default: 4,
    1100: 3,
    800: 2,
    500: 1,
  }
  
  const checkIfValid = categories.find(category => category.description === department);
  if(!checkIfValid) { return <NotFound />}
  
  if (isLoading) return <LinearProgress />
  if (error) return <div>Oh no! Something went wrong. Sorry about that, buddy...</div>

  return (  
    <Wrapper 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2>{ department }</h2>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {deptProducts?.map(product => (
          <ProductCard product={product} addToCart={addToCart} key={product.id}/>
        ))}
      </Masonry>
    </Wrapper>
  );
}
 
export default Department;