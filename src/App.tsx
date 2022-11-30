import React from "react";
import styled, { keyframes } from "styled-components";
import Circle from "./Circle";

function App() {
    return (
        <div>
            <Circle borderColor="yellow" bgColor="teal" />
            <Circle text="i'm here" bgColor="tomato" />
        </div>
    );
}

export default App;
