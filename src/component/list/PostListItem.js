import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    /* width: calc(100%-32px); */
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid #f8f9fa;
    border-radius: 8px;
    cursor: pointer;
    background: #f8f9fa;
    :hover {
        background: #11609c;
        color: #f8f9fa;
    }
`;

const TitleText = styled.p`
    font-size: 18px;
    font-weight: 600;
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
