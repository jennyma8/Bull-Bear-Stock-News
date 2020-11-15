import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
/* GOOGLE FONTS HERE */
@import url('https://fonts.googleapis.com/css?family=Lato');
@import url('https://fonts.googleapis.com/css?family=Roboto');
*, *:before, *:after {
  box-sizing: inherit;
}
html {
  box-sizing: border-box;
}
html, body {
	margin: 0;
	padding: 0;
	border: 0;
  font-size: 100%;
	/* font-family: 'Lato',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
  vertical-align: baseline;
  font-family: 'Roboto', sans-serif;
  ::-webkit-scrollbar {
        width: 20px;
      }
      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px white;
        border-radius: 10px;
      }
      ::-webkit-scrollbar-thumb {
        background: white;
        border-radius: 10px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: lightgrey;
      }
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

export default GlobalStyles;
