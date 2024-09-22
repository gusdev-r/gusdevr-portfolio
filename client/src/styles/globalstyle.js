import { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', 'Arial', sans-serif;
    }

    body {
    }

    button {
        cursor: pointer;
    }

    ::-webkit-scrollbar {
        width: 12px;
    }

    ::-webkit-scrollbar-track {
        background: var(--grey1);
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--blackDefault);
        border-radius: 10px;
        border: 2px solid var(--grey2);
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: var(--grey3);
    }
    
    
    :root {

        --greyDefault: #808080;
        --grey1: #212121;
        --grey2: #424242;
        --grey3: #616161;
        --grey4: #757575;
        --grey5: #9E9E9E;
        --grey6: #BDBDBD;
        --grey7: #E0E0E0;
        --grey8: #EEEEEE;
        --grey9: #F5F5F5;
        --grey10: #FAFAFA;

        --whiteDefault: #FFFFFF;
        --white1: #E8E8E8;
        --white2: #F9F9F9;

        --blackDefault: #000000;
        --black1: #080808;

        --erro: #CD2B31;

        --transition-default-fast: 0,3;
        --transition-color-fast: color 0.3s ease;
        --transition-color-slow: color 0.5s ease;
        --transition-all-ease-fast: all ease 0.3s;
        --transition-all-ease-slow: all ease 0.5s;
        --transition-all-medium: all 0.4;
        --transition-bg-shadow: background-color 0.5s ease, box-shadow 0.3s ease;
        --transition-width-fast: 250ms;
    }
`

export default GlobalStyled
