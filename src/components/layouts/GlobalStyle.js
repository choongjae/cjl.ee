import { createGlobalStyle } from "styled-components";
import "../../styles/index.css";

const GlobalStyle = createGlobalStyle`
* {
    font-family: 'EB Garamond';
    margin: 0;
    padding: 0;
    min-height: 0vw;  ${"" /* Makes responsiveness work on Safari */}
    color: var(--color-global);
    
    body{
        ${"" /* background: #FFF0DB */}
        background: var(--color-background)
    }

    h1{
        font-size: 80px;
        color: var(--color-text)
    }
    h2{
        font-size: 64px;
        color: var(--color-text)
    }
    h3{
        font-size: 44px;
        color: var(--color-text)
    }
    h4{
        font-size: 32px;color: var(--color-text)
    }
    p{
        font-size: 20px;color: var(--color-text)
    }
    a{
        text-decoration: none;
        color: var(--color-text)
    }

    li{
        font-size: 20px
    }
    
}
`;

export default GlobalStyle;
