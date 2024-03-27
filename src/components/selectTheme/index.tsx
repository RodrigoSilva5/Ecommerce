import { FormattedMessage } from "react-intl";
import { useTheme } from "../../hooks/theme";
import styled from "styled-components";

const SelectTheme = () => {
    const { toggleTheme } = useTheme();

  return (
    <div>
      {/* <p>
        <FormattedMessage 
            id="selected_theme"
        />
         {select}</p> */}
      <ButtonTheme onClick={toggleTheme}>
        <FormattedMessage 
            id="toggle_theme"
            defaultMessage={"Toggle Theme"}
        />
        </ButtonTheme>
    </div>
  );
};


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
export default SelectTheme;
