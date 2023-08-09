import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* Reset styles for all structural tags */
    
    a,  body, button, canvas,  div, form,
    h1, h2, h3, h4, h5, h6, head, header,  
    hr, html, i, iframe, img, input,  
    label, legend, li, nav,p, param,section,
    span, textarea, tfoot,  ul {
        border: 0;
        font-size: 100%;
        font: inherit;
        margin: 0;
        outline: none;
        padding: 0;
        text-align: left;
        text-decoration: none;
        vertical-align: baseline;
        z-index: 1;
        ::selection {
            background: rgba(113, 137, 255, .1);
        }
    }
    /* Miscellaneous resets */
    body {
        line-height: 1.15;
    }
    ul {
        list-style: none;
    }
    a{
        color: white;
        all:unset;
    }
    
    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit; 
        font-size: 100%; 
        line-height: 1.15; 
        margin: 0; 
    }
    /* Global Styling */
    html{
        scroll-behavior: smooth;
    }
    body{
        font-family: 'Be Vietnam Pro', sans-serif;;
        transition: all 0.3s;
        margin: 0;
        
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    
`;

export default GlobalStyle;
