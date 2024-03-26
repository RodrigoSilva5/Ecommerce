import styled from "styled-components";

export const Pagination = styled.div`
    display: flex;
    justify-content: center;
    padding: 30px;
    background-color: ${props => props.theme.navbar_background};
`;

export const PageNumber = styled.button`
    margin: 0 5px;
    padding: 5px 10px;
    cursor: pointer;
    background-color: #eee;
    border: 1px solid #ccc;
    border-radius: 5px;
    &:hover {
    background-color: ${props => props.theme.main_colors.teal}; /* cerulean */
    color: black; 
  }
`;
export const HomeContainer = styled.div`
width: 100vw;
height: 100vh;
`