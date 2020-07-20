import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import { Section, SideBar, Break, LineBreak, Button } from './style';

import logo from '../../assets/logo.svg';
import hot from '../../assets/hot.svg';
import news from '../../assets/news.svg';
import rising from '../../assets/rising.svg';

export default function Header() {
    return(
        <div>
            <Section>
                <a href="/"><img src={logo} alt="logo"/></a>
            </Section>
            <SideBar>
            <Button><NavLink to="/hot" 
                                activeStyle={{ 
                                color: "#FF5722", 
                                backgroundColor: "#242424", 
                                width: "160px",
                                height: "45px",
                                borderRadius: "10px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",}}>
                                    <img src={hot} alt="logo"/> 
                                        Hot
                        </NavLink>
                </Button>
            <Button><NavLink to="/new" 
                                activeStyle={{ 
                                color: "#FF5722", 
                                backgroundColor: "#242424", 
                                width: "160px",
                                height: "45px",
                                borderRadius: "10px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",}}>
                                    <img src={news} alt="logo"/> 
                                        News
                        </NavLink>
                </Button>
                <Button><NavLink to="/rising" 
                                activeStyle={{ 
                                color: "#FF5722", 
                                backgroundColor: "#242424", 
                                width: "160px",
                                height: "45px",
                                borderRadius: "10px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",}}>
                                    <img src={rising} alt="logo"/> 
                                        Rising
                        </NavLink>
                </Button>
            </SideBar>
            <Break>
                <LineBreak />
            </Break>
        </div>
    );
}