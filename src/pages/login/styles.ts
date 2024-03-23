import styled from "styled-components";

export const BackgroundLogin = styled.main`
 background-color: black;
 ${props => props.theme.background_gradient}
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100vw;
 height: 100vh;
`