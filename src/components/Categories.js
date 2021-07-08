import styled from 'styled-components';
import { categories } from '../assets/categories';
import { Link } from 'react-router-dom';
// Components
import CategoryCard from "./CategoryCard";

const Wrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
          justify-content: center;
  padding: 2rem 0;

  @media (max-width: 700px) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
            align-items: center;
  }
`;

const Categories = () => {
  return ( 
    <Wrapper>
      {categories.map(category => (
        <Link to={`/the-clothing-store/department/${category.description}`} key={category.id}>
          <CategoryCard category={category} />
        </Link>
      ))}
    </Wrapper>
  );
}
 
export default Categories;