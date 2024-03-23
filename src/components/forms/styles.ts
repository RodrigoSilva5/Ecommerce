import { styled } from "styled-components";

export const InputContainer = styled.div`
    padding: 13px 0px;

    label {
        margin-right: 13px;
        color: ${props => props.theme.main_colors.black};
    }

    input {
        padding: 8px;
        border: 1px solid ${props => props.theme.main_colors.teal}; /* teal */
        background-color: ${props => props.theme.main_colors.cerulean}; /* cerulean */
        border-radius: 8px;
        font-size: 16px;
        color: ${props => props.theme.main_colors.black}; /* black */
        outline: none; /* Remover a borda azul padrão ao focar */

        /* Efeito de hover */
        &:hover {
            background-color: ${props => props.theme.main_colors.dark_teal} ; /* Darker teal */
            border-color: ${props => props.theme.main_colors.dark_teal}; /* Darker teal */
        }

        /* Efeito de foco */
        &:focus {
            border-color: ${props => props.theme.main_colors.dark_teal}; /* Dark teal */
        }
    }

    span {
        color: #f45;
    }
`;