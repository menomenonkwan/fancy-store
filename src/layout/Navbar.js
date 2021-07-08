import { NavLink } from 'react-router-dom';
// Components
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// Styles
import styled from "styled-components";
import { IconButton } from '@material-ui/core';

const StyledNavbar = styled.nav`
  height: 100%;

  ul {
    list-style: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    height: 100%;

    li {
      font-family: 'Playfair Display', serif;
      padding: 0 0.9rem;
      font-size: 1.2rem;
      -webkit-transition: color 0.3s ease;
      -o-transition: color 0.3s ease;
      transition: color 0.3s ease;
      color: var(--white, white);
      &:hover {
        color: var(--secondary);
      }

      button {
        color: var(--white, white);
        -webkit-transition: color 0.3s ease;
        -o-transition: color 0.3s ease;
        transition: color 0.3s ease;
        &:hover {
          color: var(--secondary);
        }
      }
    }
  }
`;

const Navbar = ({ setCartIsOpen, countCartItems }) => {
  return (  
    <StyledNavbar>
      <ul>
        <NavLink to="/" exact activeClassName="selected">
          <li>Home</li>
        </NavLink>
        <NavLink to="/shop" activeClassName="selected">
          <li>Shop</li>
        </NavLink>
        <NavLink to="/contact" activeClassName="selected">
          <li>Contact</li>
        </NavLink>
        <li>
          <IconButton aria-label="cart" onClick={() => setCartIsOpen(true)}>
            <Badge badgeContent={countCartItems()} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </li>
      </ul>
    </StyledNavbar>
  );
}
 
export default Navbar;