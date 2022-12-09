import React from "react";
import styled from "styled-components";

const Father = styled.div`
    display: flex;
`;

const Box = styled.div`
    background-color: ${(props) => props.color};
    width: 100px;
    height: 100px;
`;

const Circle = styled(Box)`
    border-radius: 50px;
`;

function App() {

    return (
        <Father>
            <Box color="teal" />
            <Circle color="tomato" />
        </Father>
    )
}

export default App;
