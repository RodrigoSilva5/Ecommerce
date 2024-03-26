import styled from "styled-components";

export const CardContainer = styled.div`
    overflow: hidden;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    /* margin-bottom: 20px; */
    margin: 20px;
    ${props => props.theme.background_glass};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 768px) {
        align-self: flex-start;
        overflow-wrap: break-word;
}

    `;
    

export const ProductImage = styled.img`
    width: 100%;
    margin-bottom: 10px;
`;

export const ProductDescription = styled.p`
    margin-bottom: 10px;
    color: ${props => props.theme.text_color};
`;

export const ProductPrice = styled.p`
    margin-bottom: 10px;
    color: ${props => props.theme.text_color};
`;

