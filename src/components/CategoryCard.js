import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Paper } from "@material-ui/core";

const Wrapper = styled(Paper)`
  width: 200px;
  height: 200px;
  margin: 2rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
          align-items: center;
  position: relative;
`;

const Background = styled(motion.div)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  -webkit-filter: brightness(0.4);
          filter: brightness(0.4);
  background-position: center;
  background-repeat: no-repeat; 
  background-size: cover;
  z-index: 0;
`;

const Foreground = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
          align-items: center;
  color: white;
  z-index: 1;

  h2 {
    letter-spacing: .15rem;
    font-size: 1.25rem;
    font-weight: normal;
    font-family: 'Heebo', sans-serif;
    text-transform: uppercase;
  }
`;

const CategoryCard = ({ category }) => {
  return ( 
    <Wrapper elevation={5}>
      <Background 
        style={{backgroundImage: `url(${category.image})`}} 
        whileHover={{
          filter: 'brightness(0.6)',
          transition: { duration: 0.3 }
        }}
      />
      <Foreground>
        <h2>{category.name}</h2>
      </Foreground>
    </Wrapper>
  );
}
 
export default CategoryCard;