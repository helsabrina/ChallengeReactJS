import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import * as moment from 'moment'; 
import 'moment/locale/pt-br';

import { Container, Break, PostsList, Post, InfoList, Thumb, InfoPost } from './style';
import more from '../../assets/more.svg';

export default function Hot() {

    const [ subreddit, setSubreddit ] = useState([]);

    useEffect(() => {
  
    }, []);
  
    async function getSubreddit() {
    //   const post = await api.get(``);

    //   setSubreddit(post.data.data.children);
        const post = await api.get(`r/reactjs/hot`);

        setSubreddit(post.data.data.children);
    }
    getSubreddit();

    return (
        <Container>
            <PostsList>
                <Post>
                    {subreddit.map(posts => (
                            <li>
                                <InfoList>
                                    <Thumb><img src={posts.data.thumbnail} alt=""/></Thumb>
                                    <InfoPost>
                                        <h4>{posts.data.title}</h4>
                                        <h5>
                                            <span>Enviado em {moment(posts.data.created).locale('pt-br').format("dddd, hA")}</span> 
                                            <> por </>
                                            <span>{posts.data.author}</span>
                                        </h5>
                                        <p> {posts.data.domain}</p>
                                    </InfoPost>
                                </InfoList>
                                <Break/>
                            </li>
                        ))}
                </Post>
            </PostsList>

        </Container>
    );
};