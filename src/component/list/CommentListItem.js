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

function CommentListItem(props) {
    const { comment } = props;

    return (
        <Wrapper>
            <ConstText>
                {comment.content} {author.author}
            </ConstText>
        </Wrapper>
    );
}

export default CommentListItem;
