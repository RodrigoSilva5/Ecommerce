import styled from "styled-components"

export const SignUpContainer = styled.section`
    background-color: ${props => props.theme.main_colors.mint_green};
    border-radius: 10px;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.27);
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.27);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.27);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover{
        box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.50);
    }
    padding: 25px;
    
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
