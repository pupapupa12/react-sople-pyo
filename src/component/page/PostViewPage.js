import { useState } from "react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CommentList from "../list/CommentList";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import data from "../../data.json";

const Wrapper = styled.div`
    padding: 30px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
`;

const Container = styled.div`
    width: 90%;
    /* max-width: 720px; */

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

const PostContainer = styled.div`
    padding: 10px 24px;
    border: 0px solid grey;
    border-radius: 8px;
    background: #f8f9fa;
`;

const TitleText = styled.p`
    font-size: 28px;
    font-weight: 700;
    color: #11609c;
`;

const ContextText = styled.p`
    font-size: 18px;
    line-height: 30px;
    white-space: pre-wrap;
`;

const CommentLabel = styled.p`
    padding: 20px 0px 0px 10px;
    font-size: 16px;
    font-weight: 500;
    color: #495057;
    opacity: 70%;
`;

function PostViewPage(props) {
    const navigate = useNavigate();
    const { postId } = useParams();

    const post = data.find((item) => {
        return item.id == postId;
    });

    const [comment, setComment] = useState();

    return (
        <Wrapper>
            <Container>
                <Button
                    title="뒤로 가기"
                    onClick={() => {
                        navigate("/");
                    }}
                />
                <PostContainer>
                    <TitleText>{post.title}</TitleText>
                    <ContextText>{post.content}</ContextText>
                </PostContainer>

                <CommentLabel>댓글</CommentLabel>
                <CommentList comments={post.comments} />

                <TextInput
                    height={40}
                    value={comment}
                    onChange={(event) => {
                        setComment(event.target.value);
                    }}
                />
                <Button
                    title="댓글 작성하기"
                    onClick={() => {
                        navigate("/");
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default PostViewPage;
