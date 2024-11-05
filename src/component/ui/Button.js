import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: 8px 16px;
    font-size: 12px;
    color: white;
    background-color: #11609c;
    border-width: 0px;
    border-radius: 3px;
    cursor: pointer;
    /* cursor-color: gray; */
`;

function Button(props) {
    const { title, onClick } = props;

    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}

export default Button;
