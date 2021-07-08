import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';

export const Empty = styled.div`
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
          align-items: center;
  p {
    text-align: center;
    margin: auto;
    font-size: 1.5rem;
  }
`;

export const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  margin: 2rem auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
          justify-content: flex-start;
  -webkit-box-align: center;
  -ms-flex-align: center;
          align-items: center;

  div {
    width: 100%;
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
      
      button {
        background: red;
        width: -webkit-fit-content;
        width: -moz-fit-content;
        width: fit-content;
        background: var(--black, black);
        color: var(--white, white);
      }

      h1 {
        text-align: center;
        padding: 2rem 0;
      }
    }              
  }
`;

export const CartList = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
          flex-direction: column; 
`;

export const Checkout = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
          justify-content: flex-start;
  -webkit-box-align: end;
  -ms-flex-align: end;
          align-items: flex-end;
  padding: 2rem;
  
  h2 {
    font-size: 2.5rem;
  }

  button {
    margin: 1rem 0 10rem 0;
    padding: 0.5rem 2rem;
  }
`;

export const useStyles = makeStyles({
  paper: {
    width: '750px',
    maxWidth: '100%'
  }
});