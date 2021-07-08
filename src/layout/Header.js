import { NavLink } from 'react-router-dom';
// Components
import Navbar from "./Navbar";
// Styles
import styled from "styled-components";

const StyledHeader = styled.div`
  background: var(--black, black);
  color: var(--white, white);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  min-height: 12vh;
  -webkit-box-align: center;
  -ms-flex-align: center;
          align-items: center;
  padding: 0 1.5rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 111;

  @media (max-width: 700px) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    padding: 1rem 0;
  }  
`;

const Logo = styled.div`
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  
  h2 { 
    color: var(--white, white);
    font-family: 'Great Vibes', cursive;
    font-size: 2.5rem;
    position: relative;
    &::after {
      content: '';
      max-width: 75%;
      width: 17.5rem;
      height: .5rem;
      background: -webkit-gradient(linear, left top, left bottom, from(var(--secondary)), to(transparent));
      background: -o-linear-gradient(var(--secondary), transparent);
      background: linear-gradient(var(--secondary), transparent);
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: -1;
    }
  }
`;

const Header = ({ setCartIsOpen, countCartItems }) => {
  return (  
    <StyledHeader>
      <Logo>
        <NavLink to="/the-clothing-store/">
          <h2>The Clothing Store</h2>
        </NavLink>
      </Logo>
      <Navbar 
        setCartIsOpen={setCartIsOpen} 
        countCartItems={countCartItems}
      />
    </StyledHeader>
  );
}
 
export default Header;