import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

//"styled(import된 styled-components사용).div``" -> 약속된 형식
const Wrapper = styled.div`
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
