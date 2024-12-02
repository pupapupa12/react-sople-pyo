import React from "react";
import styled from "styled-components";
import CommentListItem from "./CommentListItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    transition: background 0.5s, color 0.5s;
    :hover {
        background: #f8f9fa; /* 호버 시 배경색 변경 */
        color: #5a5a5a; /* 호버 시 텍스트 색상 변경 */
        border: 1px #f8f9fa;
    }

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

function CommentList(props) {
    const { comments } = props;

    return (
        <Wrapper>
            {comments.map((comment, index) => {
                return (
                    <CommentListItem
                        key={comment.id}
                        comment={comment}
                        author={author}
                    />
                );
            })}
        </Wrapper>
    );
}

export default CommentList;
