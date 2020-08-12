import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import api from '../../services/api'
import * as moment from 'moment' 
import 'moment/locale/pt-br'

import { PostsList, PostListContainer, Post, Thumb, PostInfo, Break, MessageError } from './style'


export default function PostList() {
    const { topic } = useParams()
    const [ postList, setPostList ] = useState([])
    const [ after, setAfter ] = useState('')
    const [error, setError] = useState(false)
    const [ loading, setLoading  ] = useState(false)

    async function getPostList(reset) {
        setError(false)

        const afterUrl = after && !reset ? `/&after=${after}` : '';
        
        try {
            setLoading(true)
            const post = await api.get(`r/reactjs/${topic}?limit=5${afterUrl}`);
            
            if (reset) {
                setPostList([
                    ...post.data.data.children
                ])
            } else {
                setPostList([
                    ...postList,
                    ...post.data.data.children
                ])
            }
            setLoading(false)
            setAfter(post.data.data.after)
        } catch(err) {
            setError(err.message)
        };
        
    }
    
    useEffect(() => {
        getPostList(true)
    }, [topic]);
            
            return (
                <PostsList>     
                    <PostListContainer>
                        {postList.map(posts => (
                            <li key={posts.data.id}>
                                    <Post>
                                        <Thumb><img src={posts.data.thumbnail} alt=""/></Thumb>
                                        <PostInfo>
                                            <h4>{posts.data.title}</h4>
                                            <h5>
                                                <span>Enviado {moment(posts.data.created*1000).fromNow()}</span> 
                                                <> por </>
                                                    <span>{posts.data.author}</span>
                                            </h5>
                                            <p> {posts.data.domain}</p>
                                        </PostInfo>
                                    </Post>
                                    <Break/>
                                </li>
                        ))}
                            
                        {!loading && after &&
                            <MessageError>
                                <button onClick={() => getPostList(false)} type="button"> MOSTRAR MAIS</button>
                            </MessageError>
                        }

                        {loading && !error &&
                            <MessageError>
                                <h3>Carregando...</h3>
                            </MessageError>
                        }

                        {error && 
                            <MessageError>
                                <h3>Aconteceu algo! :(</h3>
                                <button onClick={() => getPostList(false)} type="button">Tente Novamente</button>
                            </MessageError>
                        }

                        {(!after && !error) && (
                            <MessageError>
                                <h3>Ops, parece que os posts acabaram :(</h3>
                            </MessageError>
                        )}

                    </PostListContainer>
                </PostsList>  
    );
};