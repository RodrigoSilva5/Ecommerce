import { useState } from "react";
import { ThemeProvider as Theme_Provider } from "styled-components";

// // Define our button, but with the use of props.theme this time
// const Button = styled.button`
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border-radius: 3px;

//   /* Color the border and text with theme.main */
//   color: ${props => props.theme.main};
//   border: 2px solid ${props => props.theme.main};
// `;

// // We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
// Button.defaultProps = {
//   theme: {
//     main: "#BF4F74"
//   }
// }

// Define what props.theme will look like
const theme = {
  dark: {
    main_colors: {
          mint_green: "#DAFFED",
          ice_blue: "#9BF3F0",
          black: "#000000",
          teal: "#177E89",
          cerulean: "#006E90",
          main: "mediumseagreen",
          dark_teal: "#005570",
          white: "#ffffff",
    },
    background_gradient: `
    background: rgb(0,0,0);
    background: -moz-linear-gradient(0deg, rgba(0,0,0,1) 59%, rgba(69,69,69,1) 100%);
    background: -webkit-linear-gradient(0deg, rgba(0,0,0,1) 59%, rgba(69,69,69,1) 100%);
    background: linear-gradient(0deg, rgba(0,0,0,1) 59%, rgba(69,69,69,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#454545",GradientType=1);  
    `,

    navbar_background: `
    background: rgb(0,85,112);
    background: -moz-linear-gradient(80deg, rgba(0,85,112,1) 0%, rgba(23,126,137,1) 100%);
    background: -webkit-linear-gradient(80deg, rgba(0,85,112,1) 0%, rgba(23,126,137,1) 100%);
    background: linear-gradient(80deg, rgba(0,85,112,1) 0%, rgba(23,126,137,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#005570",endColorstr="#177e89",GradientType=1); 
    `,
    background_2: `
    background: rgb(0,110,144);
    background: -moz-linear-gradient(80deg, rgba(0,110,144,1) 0%, rgba(0,85,112,1) 25%, rgba(155,243,240,1) 100%);
    background: -webkit-linear-gradient(80deg, rgba(0,110,144,1) 0%, rgba(0,85,112,1) 25%, rgba(155,243,240,1) 100%);
    background: linear-gradient(80deg, rgba(0,110,144,1) 0%, rgba(0,85,112,1) 25%, rgba(155,243,240,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#006e90",endColorstr="#9bf3f0",GradientType=1); 
    `,
    background_glass: `
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    `,
    text_color: "white"
  },

  
  light: {
    background_gradient: `
      background: rgb(255,255,255);
      background: -moz-linear-gradient(0deg, rgba(255,255,255,1) 58%, rgba(155,243,240,1) 100%);
      background: -webkit-linear-gradient(0deg, rgba(255,255,255,1) 58%, rgba(155,243,240,1) 100%);
      background: linear-gradient(0deg, rgba(255,255,255,1) 58%, rgba(155,243,240,1) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#9bf3f0",GradientType=1);
    `,
    main_colors: {
      mint_green: "#DAFFED",
      ice_blue: "#9BF3F0",
      black: "#000000",
      teal: "#177E89",
      cerulean: "#006E90",
      main: "mediumseagreen",
      dark_teal: "#005570",
      white: "#ffffff",
      },
      navbar_background: `
      background: rgb(0,85,112);
      background: -moz-linear-gradient(80deg, rgba(0,85,112,1) 0%, rgba(23,126,137,1) 100%);
      background: -webkit-linear-gradient(80deg, rgba(0,85,112,1) 0%, rgba(23,126,137,1) 100%);
      background: linear-gradient(80deg, rgba(0,85,112,1) 0%, rgba(23,126,137,1) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#005570",endColorstr="#177e89",GradientType=1); 
      `,
      background_2: `
      background: rgb(0,110,144);
      background: -moz-linear-gradient(80deg, rgba(0,110,144,1) 0%, rgba(0,85,112,1) 25%, rgba(155,243,240,1) 100%);
      background: -webkit-linear-gradient(80deg, rgba(0,110,144,1) 0%, rgba(0,85,112,1) 25%, rgba(155,243,240,1) 100%);
      background: linear-gradient(80deg, rgba(0,110,144,1) 0%, rgba(0,85,112,1) 25%, rgba(155,243,240,1) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#006e90",endColorstr="#9bf3f0",GradientType=1); 
      `,
      background_glass: `
      backdrop-filter: blur(16px) saturate(180%);
      -webkit-backdrop-filter: blur(16px) saturate(180%);
      background-color: rgba(255, 255, 255, 0.75);
      border-radius: 12px;
      border: 1px solid rgba(209, 213, 219, 0.3);
      `,
      text_color: "black"
  }
};

export default function ThemeProvider({children} : {children: React.ReactNode}) {
    const [select, setSelect] = useState<"dark"| "light">("light")

    return (
    <Theme_Provider theme={theme[select]}>
      {children}
    </Theme_Provider>
    )
}

