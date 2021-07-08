/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v7.0.29,
* Autoprefixer: v9.7.6
* Browsers: last 4 version
*/

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    --white: #fefefe;
    --black: #101010;
    --secondary: #996600;
  }
  body {
    background: -o-linear-gradient(315deg, var(--white), #eaeaea);
    background: linear-gradient(135deg, var(--white), #eaeaea);
    min-height: 100vh; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
  }
  a {
    text-decoration: none;
  }

  .my-masonry-grid {
    display: -webkit-box; 
    display: -ms-flexbox; 
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }
  .my-masonry-grid_column > div { 
    margin-bottom: 30px;
  }
  .selected {
    text-decoration: underline;
    text-decoration-thickness: 3px;
    color: var(--secondary, brown);
  }
`;

export default GlobalStyle;