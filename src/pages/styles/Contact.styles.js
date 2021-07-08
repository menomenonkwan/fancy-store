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
`;

export const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  min-height: 90vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: baseline;
  -ms-flex-align: baseline;
          align-items: baseline;

  @media (max-width: 700px) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-top: 4rem;
  }
`;

export const Information = styled.div`
  height: 100%;
  -webkit-box-flex: 1;
  -ms-flex: 1;
          flex: 1;
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
  padding: 5%;

  h1 { font-size: 3.5rem; }

  h2 { color: var(--secondary, brown); }

  p {
    line-height: 1.5;
    font-size: 1.2rem;
  }

  address {
    margin: 1rem 0;
    
    span {
      font-weight: bold;
      display: block;
      font-size: 1.2rem;
    }

    p {
      text-decoration: none;
      font-style: normal;
      margin-top: 0.5rem;
      letter-spacing: 0.1rem;
    }

    @media (max-width: 700px) {
      margin: 0 auto;
      text-align: center;
    }
  }
`;

export const ContactForm = styled.div`
  height: 100%;
  -webkit-box-flex: 1;
  -ms-flex: 1;
          flex: 1;
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
  padding: 5%;

  form {
    width: 100%;

    @media (max-width: 700px) {
      margin-bottom: 4rem;
    }     

    div {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
          -ms-flex-pack: justify;
              justify-content: space-between;
      @media (max-width: 700px) {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
      }  
    }
    input, textarea {
      border-radius: 0;
      border: 1px solid black;
      padding: 5px;
      font-size: 1.5rem;
      &:focus {
        outline: 2px solid var(--secondary, brown);
      }
    }
    input {
      width: 45%;
      @media (max-width: 700px) {
        width: 100%;
        margin-top: 1rem;
      }  
    }
    textarea {
      width: 100%;
      margin: 1rem 0;
      resize: none;
    }
    button {
      @media (max-width: 700px) {
        background: var(--black, black);
        color: var(--white, white);
        width: 100%;
      }
    }
  }
`;