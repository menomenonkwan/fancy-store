import { Paper } from '@material-ui/core';
import styled from 'styled-components';

export const Wrapper = styled(Paper)`
  margin: 1rem;
  padding: 0.5rem 1rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
          justify-content: center;
  
  img {
    max-width: 80px;
    -o-object-fit: cover;
       object-fit: cover;
  }
  
  h3 {
    padding: 0 1rem;
    -webkit-box-flex: 2;
        -ms-flex: 2;
            flex: 2;
  }

  @media (max-width: 700px) {
    margin: 1rem 0;
  }    
`;

export const Controls = styled(Paper)`
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: end;
  -ms-flex-align: end;
          align-items: flex-end;
  
  .delete {
    color: var(--secondary, brown);

    @media (max-width: 700px) {
      display: none;
    }   
  }
  
  div {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    padding-top: 1rem;
    background: -webkit-gradient(linear, left top, left bottom, from(transparent), to(var(--secondary)));
    background: -o-linear-gradient(transparent, var(--secondary));
    background: linear-gradient(transparent, var(--secondary));
  
    h3 {
      padding: 0 1rem;
      font-size: 1.5rem;
      @media (max-width: 700px) {
        padding: 0;
      }   
    }
  
    p {
      color: var(--black, black);
      font-size: 2rem;
      font-weight: bold;
    }

    @media (max-width: 700px) {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
              justify-content: center;
      width: 100%;
      -webkit-box-align: center;
      -ms-flex-align: center;
              align-items: center;
      padding: 1rem;
      text-align: right;

      button {
        background: transparent;
        margin: 0 .25rem;
      }
    }   
  }
`;