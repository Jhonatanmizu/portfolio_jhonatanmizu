import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }
    html{
        font-size: 62.5%;
    }
    body{
        width: 100%;
        height: 100%;
        font-size: 1.6rem;
        font-family: sans-serif;
    }
`
export default GlobalStyle
