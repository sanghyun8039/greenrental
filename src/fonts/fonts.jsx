import { createGlobalStyle } from "styled-components";
import Galmuri from "../fonts/Galmuri7.woff2";
import SUIT from "../fonts/SUIT-Medium.woff2";
export default createGlobalStyle`
    @font-face {
        font-family: "Galmuri";
        src: local("Galmuri"),
        url(${Galmuri}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: "SUIT";
        src: local("SUIT"),
        url(${SUIT}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }
`;
