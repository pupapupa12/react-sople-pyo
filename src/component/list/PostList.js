import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

//"styled(import된 styled-components사용).div``" -> 약속된 형식
const Wrapper = styled.div`
    transition: background 0.3s, color 0.3s;

    :hover {
        background: #11609c; /* 호버 시 배경색 변경 */
        color: #f8f9fa; /* 호버 시 텍스트 색상 변경 */
    }
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: #343a40;

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

function PostList(props) {
    const { posts, onClickItem } = props;

    return (
        <Wrapper>
            {posts.map((post, index) => {
                return (
                    <PostListItem
                        key={post.id}
                        post={post}
                        index={index + 1} // 1부터 시작하는 인덱스 전달
                        onClick={() => {
                            onClickItem(post);
                        }}
                    />
                );
            })}
        </Wrapper>
    );
}

export default PostList;
