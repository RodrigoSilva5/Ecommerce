import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.main_colors.white};
    margin-right: 20px; /* Espaçamento entre os links */
    font-size: 16px;

    &:hover {
        text-decoration: underline; /* Sublinhado ao passar o mouse */
        font-size: 19px;
        transition: all 0.3s;
    }
`;
