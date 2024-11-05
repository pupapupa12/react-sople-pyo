import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import data from "../../data.json";

const Wrapper = styled.div`
    padding: 30px;
    width: calc(100% - 30px);
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    /* border-width: 0px; */
`;

const Container = styled.div`
    width: 100%;
    /* max-width: 720px; */
    /* border-width: 0px; */

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

function MainPage(props) {
    // const {} = props;

    const navigate = useNavigate();

    return (
        <Wrapper>
            <Container>
                <Button
                    title="새로운 글 작성하기"
                    onClick={() => {
                        navigate("/post-write");
                    }}
                />

                <PostList
                    posts={data}
                    onClickItem={(item) => {
                        navigate(`/post/${item.id}`);
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default MainPage;
