import styled from "styled-components";

export const Button = styled.button`
  /* Estilos padrão do botão */
  background-color: ${props => props.theme.main_colors.teal}; /* teal */
  color: ${props => props.theme.main_colors.black}; /* black */
  border: 2px solid ${props => props.theme.main_colors.cerulean}; /* cerulean */
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer; /* Adicionando cursor pointer para indicar interatividade */
  margin: 5px;

  /* Seletor CSS aninhado para hover */
  &:hover {
    background-color: ${props => props.theme.main_colors.cerulean}; /* cerulean */
    color: #ffffff; /* white */
  }
`
export const LogoutButton = styled.button`
    background-color: #dc3545;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #d40014;
        color: black;
    }
`;
