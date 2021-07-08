import styled from 'styled-components';
import { motion } from 'framer-motion';
// Components
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { makeStyles, Paper } from '@material-ui/core';

const Wrapper = styled(Paper)`
  text-align: center;
  border: 2px solid var(--secondary);
  padding: 1.5rem 2.5rem;
  line-height: 1.5;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  margin: 0 auto 2rem auto;

  div {
    color: var(--black, black);
    margin-top: 1rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
        justify-content: space-around;
  }
`;

const useStyles = makeStyles(theme => ({
  paperRoot: {
    backgroundColor: '#eaeaea',
    color: 'var(--secondary, white)'
  }
}));

const SocialMedia = () => {
  const classes = useStyles();

  return (  
    <Wrapper elevation={5} className={classes.paperRoot} >
      <h2>FOLLOW US</h2>
      <h5>On Our Social Networks</h5>
      <div>
        <motion.div
          whileHover={{ scale: 1.1, cursor: 'pointer' }}
          whileTap={{ scale: 0.9 }}
        >
          <TwitterIcon fontSize='large'/>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1, cursor: 'pointer' }}
          whileTap={{ scale: 0.9 }}
        >
          <FacebookIcon fontSize='large'/>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1, cursor: 'pointer' }}
          whileTap={{ scale: 0.9 }}
        >
          <InstagramIcon fontSize='large'/>
        </motion.div>
      </div>
    </Wrapper>    
  );
}
 
export default SocialMedia;