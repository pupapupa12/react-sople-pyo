import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 90%;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid #f8f9fa;
    border-radius: 8px;
    cursor: pointer;
    background: #f8f9fa;
    color: #080808; /* 기본 텍스트 색상 */
    transition: background 0.3s, color 0.3s;
    :hover {
        background: #11609c; /* 호버 시 배경색 변경 */
        color: #f8f9fa; /* 호버 시 텍스트 색상 변경 */
    }
`;

const TitleText = styled.p`
    font-size: 20px;
    font-weight: 600;
    margin: 0; /* 기본 여백 제거 */
    color: inherit; /* 부모의 색상 상속 */
`;

function PostListItem(props) {
    const { post, onClick } = props;

    return (
        <Wrapper onClick={onClick}>
            <TitleText>{post.title}</TitleText>
        </Wrapper>
    );
}

export default PostListItem;
