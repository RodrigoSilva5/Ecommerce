import styled from "styled-components";

export const ContainerList= styled.div`
    background-image: url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100');
    background-position: center;
    display: flex;
    background-size: cover; /* Faz com que a imagem de fundo cubra todo o container */
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    & h1{
        color: ${props => props.theme.text_color};
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Adiciona sombra na fonte */
        font-size: xx-large;

    }
    @media screen and (min-width: 768px) {
        flex-wrap: nowrap;

}
`