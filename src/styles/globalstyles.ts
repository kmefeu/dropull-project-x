import { createGlobalStyle } from "styled-components";
import "./fonts.css";

export default createGlobalStyle`

html,body{
    margin: 0px;
    padding: 0px;
    font-family: 'Rambla', sans-serif;
}

/* width */
::-webkit-scrollbar {
  width: 15px;
  transition: 0.5s ease-in-out;
  background: #E2E2E2;
}

/* Track */
::-webkit-scrollbar-track {
  display: none;
  background: #E2E2E2;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #191919;
  border-radius: 7.5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #13FF00;
}
`;

// --chakra-colors-background: #0F0f0f;
// --chakra-colors-alt_background: #191919;
// --chakra-colors-loud: #13FF00;
// --chakra-colors-primary: #77f961;
// --chakra-colors-neutral: #E2E2E2;
// --chakra-colors-dark_neutral: #bdbdbd;
// --chakra-colors-alt_neutral: #c4c4c4;
