import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./component/page/MainPage";
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";

// const MainImg = styled.src`
//     /* display: flex;
//     justify-content: left;
//     align-items: flex-start;
//     width: 100px;
//     height: 20px;
//     border-radius: 25px; */
// `;

const MainTitleText = styled.p`
    font-size: 50px;
    font-weight: bold;
    text-align: left;
    padding-left: 30px;
    color: #11609c;
`;

function App(props) {
    return (
        <BrowserRouter>
            {/* <MainImg>
                <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*XCgoYU9sqt95P8J0.png"></img>
            </MainImg> */}
            <MainTitleText>소플의 미니블로그</MainTitleText>
            <Routes>
                <Route MainTitleText={<MainPage />} />
                <Route index element={<MainPage />} />
                <Route path="post-write" element={<PostWritePage />} />
                <Route path="post/:postId" element={<PostViewPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
