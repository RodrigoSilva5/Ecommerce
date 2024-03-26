import styled from "styled-components"
import { useIntl } from "../../hooks/intl"
import { FormattedMessage } from "react-intl"

export const SelectLanguage = () => {
    const {languageChange, select} = useIntl()
    return <>
        <ButtonTheme onClick={languageChange}>
            <FormattedMessage 
                id="change_language"
            />
        </ButtonTheme>
    </>
}


const ButtonTheme = styled.button`
    /* Estilos padrão do botão */
  background-color: ${props => props.theme.text_color}; /* teal */
  color: ${props => props.theme.main_colors.cerulean}; /* black */
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