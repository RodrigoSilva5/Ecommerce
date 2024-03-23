import styled from "styled-components";

export const NavContainer = styled.nav`
    background-color: ${props => props.theme.navbar_background};
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

