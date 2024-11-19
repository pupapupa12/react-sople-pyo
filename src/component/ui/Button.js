import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: 8px 16px;
    font-size: 15px;
    color: white;
    background-color: darkgray;
    border-width: 0px;
    border-radius: 3px;
    /* cursor: pointer; */
    transition: background 0.3s, color 0.3s;
    :hover {
        background: #11609c; /* 호버 시 배경색 변경 */
        color: #f8f9fa; /* 호버 시 텍스트 색상 변경 */
    }
`;

function Button(props) {
    const { title, onClick } = props;

    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}

export default Button;
