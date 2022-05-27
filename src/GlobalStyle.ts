import { createGlobalStyle, ThemeProvider } from "styled-components";

type GlobalStyleProps = {
    backgroundColor:string
}

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
    *{
        margin:0;
        padding:0;
        font-family: 'Roboto', sans-serif;
    }
    body{
        width:100vw;
        min-height:100vh;
        background-color:#2c2c2c;
    }
`;

export const Theme = ThemeProvider