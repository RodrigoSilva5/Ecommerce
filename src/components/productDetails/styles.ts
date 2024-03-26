import styled from "styled-components";

export const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    ${props => props.theme.navbar_background}
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    color: white;
`;

export const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 20px;
`;

export const DetailItem = styled.p`
    margin-bottom: 10px;
`;

export const Loading = styled.div`
    text-align: center;
    font-size: 18px;
    color: #555;
    margin-top: 20px;
`;

export const Error = styled.div`
    text-align: center;
    font-size: 18px;
    color: red;
    margin-top: 20px;
`;