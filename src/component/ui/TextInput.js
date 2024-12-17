import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
`;

const StyledTextarea = styled.textarea`
    width: calc(100% - 32px);
    ${(props) => props.height && `height: ${props.height}px;`}
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
    border: 2px outset lightsteelblue;
    opacity: 90%;
    border-radius: 5px;
`;

const CountText = styled.p`
    color: #666;
    font-size: 12px;
    text-align: right;
    margin: 4px 0;
`;

function TextInput(props) {
    const { height, value, onChange } = props;
    const [inputCount, setInputCount] = useState(0);

    const onInputHandler = (e) => {
        setInputCount(e.target.value.length);
        onChange(e);
    };

    return (
        <Wrapper>
            <StyledTextarea
                height={height}
                value={value}
                onChange={onInputHandler}
                maxLength={1000}
            />
            <CountText>
                <span>{inputCount}</span>
                <span>/1000 자</span>
            </CountText>
        </Wrapper>
    );
}

export default TextInput;
