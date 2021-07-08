import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
          align-items: center;

  background-position: center;
  background-repeat: no-repeat; 
  background-size: cover;
  background-attachment: fixed;
`;

export const Wrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 80%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: start;
  -ms-flex-align: start;
          align-items: flex-start;
  min-height: 90vh;

  div { width: 50%; }

  h1 {
    font-size: 3.5rem;
    text-shadow: 1px 1px 1px var(--white, white);
    text-transform: uppercase;
  }
  
  button {
    background: var(--black, black);
    color: var(--white, white);
    font-size: 1.5rem;
    padding: 0.25rem 1.5rem;
    margin: 1rem 0;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    &:hover {
      background: rgba(0,0,0,0.5);
    }
  }

  @media (max-width: 700px) {
    div {
      width: 90%;
      margin: auto;
    }
    
    h1 {
      font-size: 2.5rem;
      color: var(--white, white);
      text-shadow: 1px 1px 1px var(--black, black);
    }
    
    h2 {
      font-size: 1.25rem;
    }
    
    button {
      margin: auto;
    }
  }
  
`;