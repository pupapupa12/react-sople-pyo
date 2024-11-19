import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./component/page/MainPage";
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";

const HeaderContainer = styled.div`
    position: relative;
    width: 100%;
    height: 300px;
    cursor: pointer;
`;

const MainImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    cursor: pointer; /* 클릭 가능하도록 포인터 설정 */
`;

const GradientOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        to top,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0) 90%
    );
    z-index: 2;
`;

const MainTitleText = styled.p`
    position: absolute;
    bottom: 50px;
    left: 50px;
    font-size: 60px;
    font-weight: bold;
    opacity: 90%;
    color: white;
    z-index: 3;
    margin: 0;
`;

function Header() {
    const navigate = useNavigate();

    return (
        <HeaderContainer>
            <MainImg
                src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*XCgoYU9sqt95P8J0.png"
                alt="Main Banner"
                onClick={() =>
                    navigate("/")
                } /* 클릭 이벤트로 메인 페이지 이동 */
            />
            console.log(1);
            <GradientOverlay />
            <MainTitleText>소플의 미니블로그</MainTitleText>
        </HeaderContainer>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<MainPage />} />
                <Route path="post-write" element={<PostWritePage />} />
                <Route path="post/:postId" element={<PostViewPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
