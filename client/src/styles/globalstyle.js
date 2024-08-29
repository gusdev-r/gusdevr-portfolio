import { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }

    body {
        font-family: 'Poppins', 'Arial', sans-serif;
    }

    button {
        cursor: pointer;
    }

    :root {
        --gray0: #808080; 
        --gray1: #171717; /* header&footer background */
        --gray2: #6E6D6D;
        --gray3: #323232;

        --whiteDefault: #FFFFFF;
        --blackDefault: #000000;

    }
`

export default GlobalStyled
