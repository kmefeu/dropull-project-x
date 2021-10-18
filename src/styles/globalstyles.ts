import { createGlobalStyle } from "styled-components";
import "./fonts.css";

export default createGlobalStyle`

html,body{
    margin: 0px;
    padding: 0px;
    font-family: 'Rambla', sans-serif;
    background-color: var(--dirt-white);
}

/* width */
::-webkit-scrollbar {
  width: 15px;
  transition: 0.5s ease-in-out;
  background: var(--neutral);
}

/* Track */
::-webkit-scrollbar-track {
  display: none;
  background: var(--neutral);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--alt_background);
  border-radius: 7.5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--loud);
}

:root{
   --background: #0F0f0f;
 --alt_background: #191919;
 --loud: #13FF00;
 --primary: #77f961;
 --neutral: #E2E2E2;
 --dark_neutral: #bdbdbd;
 --alt_neutral: #c4c4c4;
 --white:#fff;
--dirt-white: #f0f0f0 ;

}
`;
