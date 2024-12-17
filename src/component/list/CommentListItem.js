import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: calc();
    padding: 6px 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px dashed #ced4da;
    border-radius: 3px;
    /* border-opacity: 30%; */
    cursor: pointer;
    background: white;
    :hover {
        border: 0px;
    }
`;

const ConstText = styled.p`
    color: 343a40;
    font-size: 14px;
    white-space: pre-wrap;
`;

const AuthorText = styled.p`
    color: #6c757d;
    font-size: 12px;
    font-style: italic;
    margin-top: 4px;
`;

function CommentListItem(props) {
    const { comment, author } = props;

    return (
        <Wrapper>
            <ConstText>{comment.content}</ConstText>
            <AuthorText>{comment.author}</AuthorText>
        </Wrapper>
    );
}

export default CommentListItem;
