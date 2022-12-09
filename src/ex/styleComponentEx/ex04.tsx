import React from "react";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.theme.bgColor};
`;

const Title = styled.h1`
    color: ${(props) => props.theme.textColor};
`;

function App() {
    return (
        <Wrapper>
            <Title>Hello</Title>
        </Wrapper>
    );
}

export default App;
