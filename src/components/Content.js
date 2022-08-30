import React from 'react';
import ImgSlider from "./ImgSlider";
import Viewers from './Viewers';
import Section from './Section';
import styled from "styled-components";

function Content() {
    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Section
                title={'Recommended for You'}
                type={'recommend'}
            />
            <Section
                title={'New to Disney+'}
                type={'new'}
            />
            <Section
                title={'Originals'}
                type={'original'}
            />
            <Section
                title={'Trending'}
                type={'trending'}
            />
        </Container>
    );
};

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);

    &:after {
        background: url('/images/home-background.png') center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`;

export default Content;