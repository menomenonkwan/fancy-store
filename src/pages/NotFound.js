import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
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
  
  h2 {
    color: brown;
    margin: 2rem;
    &:hover {
      cursor: pointer;
    }
  }
`;

const NotFound = () => {
  return (  
    <Wrapper>
      <h1>Oops... This page does not exist</h1>
      <NavLink to="/">
        <h2>Back Home</h2>
      </NavLink>
    </Wrapper>
  );
}
 
export default NotFound;