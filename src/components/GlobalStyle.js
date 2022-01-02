import { createGlobalStyle } from "styled-components";
import "../styles/index.css";

export const GlobalStyle = createGlobalStyle`
* {
    font-family: 'EB Garamond';
    margin: 0;
    padding: 0;
    min-height: 0vw;  ${"" /* Makes responsiveness work on Safari */}
    background: #FFF0DB;

    h1{
        font-size: 100px
    }
    h2{
        font-size: 64px
    }
    h3{
        font-size: 44px
    }
    h4{
        font-size: 32px
    }
    p{
        font-size: 20px
    }
    a{
        text-decoration: none
    }
}
`;
