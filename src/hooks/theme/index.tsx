import styled, { ThemeProvider as Theme_Provider } from "styled-components";

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
    `
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
      `
  }
};

export default function ThemeProvider({children} : {children: React.ReactNode}) {
    return (
    <Theme_Provider theme={theme.dark}>
      {children}
    </Theme_Provider>
    )
}

