import React from 'react';

import ButtonNav from '../ButtonNav';

import logo from '../../assets/logo.svg';
import hot from '../../assets/hot.svg';
import news from '../../assets/news.svg';
import rising from '../../assets/rising.svg';

import { Section, SideBar, Break, LineBreak } from './style';

export default function Header() {
    return(
        <>
            <Section>
                <a href="/"><img src={logo} alt="logo"/></a>
            </Section>
            <SideBar>
                <ButtonNav to="/hot">
                    <img src={hot} alt="hot"/> 
                    Hot
                </ButtonNav>
                <ButtonNav to="/new">
                    <img src={news} alt="news"/> 
                    News
                </ButtonNav>
                <ButtonNav to="/rising">
                    <img src={rising} alt="rising"/> 
                    Rising
                </ButtonNav>
            </SideBar>
            <Break>
                <LineBreak />
            </Break>

        </>
    );
}