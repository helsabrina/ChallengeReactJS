import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Container, Break } from './style';
import hot from '../../assets/hot.svg';
import news from '../../assets/news.svg';
import rising from '../../assets/rising.svg';

export default function Main() {

    const [ subreddit, setSubreddit ] = useState([]);

    useEffect(() => {
  
    }, []);
  
    async function getSubreddit() {
      const post = await api.get(``);

      setSubreddit(post.data.data.children);
    }
    getSubreddit();
    console.log(subreddit);
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
            <div>
                <>
                    {subreddit.map(posts => (
                        <li>{posts.data.title}</li>
                    ))}
                </>
            </div>

        </Container>
    );
};