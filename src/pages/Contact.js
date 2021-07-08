// Components
import { Button } from '@material-ui/core';
import SocialMedia from '../components/SocialMedia';
// Styles
import { Container, Wrapper, Information, ContactForm } from './styles/Contact.styles';
import { containerVariants } from '../assets/pageTransition';


const Contact = () => {
  return (  
    <Container
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Wrapper>
        <Information>
          <h2>Information</h2>
          <h1>Contact Us</h1>
          <p>We love our customers, so you know, let us know how great we are and stuff. If you have a question, feel free to give us a call or mail some cookies to the address below. Have a great day, buddy!</p>
          <address>
            <span>123 Fake St.</span>
            <span>Springfield USA</span>
            <p>(123) 555-6789</p>
          </address>
        </Information>
        <ContactForm>
          <form>
            <div>
              <input placeholder="Name"/>
              <input placeholder="Email"/>
            </div>
            <textarea rows="5" placeholder="Message"/>
            <Button>Send Message</Button>
          </form>
        </ContactForm>
      </Wrapper>

      <SocialMedia />
    </Container>
  );
}
 
export default Contact;