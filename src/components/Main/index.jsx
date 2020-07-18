import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Container, Break, PostsList, Post, InfoList, Thumb } from './style';
import hot from '../../assets/hot.svg';
import news from '../../assets/news.svg';
import rising from '../../assets/rising.svg';
import more from '../../assets/more.svg';

export default function Main() {

    const [ subreddit, setSubreddit ] = useState([]);

    useEffect(() => {
  
    }, []);
  
    async function getSubreddit() {
    //   const post = await api.get(``);

    //   setSubreddit(post.data.data.children);
        const post = await api.get(`r/reactjs/`);

        setSubreddit(post.data.data.children);
    }
    getSubreddit();

    return (
        <Container>
            <button type="button">
                <img src={hot} alt="hot"/>
                <p>Hot</p>
            </button>
            <button type="button">
                <img src={news} alt="new"/>
                <p>New</p>
            </button>
            <button type="button">
                <img src={rising} alt="rising"/>
                <p>Rising</p>
            </button>
            <Break/>
            <PostsList>
                <Post>
                    {subreddit.map(posts => (
                            <li>
                                <InfoList>
                                    <Thumb><img src={posts.data.thumbnail} alt=""/></Thumb>
                                    <div>
                                        <h4>{posts.data.title}</h4>
                                        <h5>
                                            <span>Enviado em {(new Date(posts.data.created)).toLocaleDateString() }</span> 
                                            <> por</>
                                            <span> {posts.data.author}</span>
                                        </h5>
                                        <p> {posts.data.domain}</p>
                                    </div>
                                </InfoList>
                                <Break/>
                            </li>
                        ))}
                </Post>
                    <button type="button">
                        <img src={more} alt="more"/>
                        <p>Ver mais</p>
                    </button>
            </PostsList>

        </Container>
    );
};