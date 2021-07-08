import styled from 'styled-components';

const StyledFooter = styled.div`
  background: var(--black, black);
  color: var(--white, white);
  width: 100%;
  text-align: center;
  padding: 1rem;
  p {
    margin: 1rem;
    font-size: 0.7rem;
    font-family: 'Playfair Display', serif;
  }
`;

const Footer = () => {
  return (  
    <StyledFooter>
      <p>&copy; 2021 Brannon Lee</p>
    </StyledFooter>
  );
}
 
export default Footer;