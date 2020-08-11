import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';
import * as moment from 'moment'; 
import 'moment/locale/pt-br';

import { MessageError, Container, Break, PostsList, Post, InfoList, Thumb, InfoPost } from './style';


export default function PostList() {
    
    const { topic } = useParams();
    
    let loader;
    
    const [ postList, setPostList ] = useState([]);
    const [ after, setAfter ] = useState('');
    const [error, setError] = useState(false);
    const [ loading, setLoading  ] = useState(false);
    

    async function getPostList() {
        setError(false)

        const afterUrl = after ? `&after=${after}` : '';

        try {
            const post = await api.get(`r/reactjs/${topic}?limit=1${afterUrl}`);
            console.log(postList)
            setPostList([
                ...postList,
                ...post.data.data.children
            ])
            setAfter(post.data.data.after)
        } catch(err) {
            setError(err.message)
        };

        // try {
        //     setLoading(true)
        //     const post = await api.get(`r/reactjs/${topic}?limit=20&after=${after}`);
        //     setPostList([
        //         ...postList,
        //         ...post.data.data.children
        //     ]);
        //     setLoading(false)
        //     console.log(post.data.data.after)
        //     setAfter(post.data.data.after)
        // } catch(err) {
        //     setError(err.message)
        //     console.log(err)
        // };
    }
    console.log('um', postList)
    useEffect(() => {
        console.log('troquei hein')
        setAfter('')
        setPostList([])
        getPostList()
        console.log(postList, 'dois')
    }, [topic]);


    // if (error) {
    //     return (
    //         <MessageError>
    //             <h3>Aconteceu algo! :(</h3>
    //             <button onClick={getPostList} type="button">Tente Novamente</button>
    //         </MessageError>
    //     )
    // }


    return (
            <Container>
                <PostsList>
                    <Post>
                        {postList.map(posts => (
                                <li key={posts.data.id}>
                                    <InfoList>
                                        <Thumb><img src={posts.data.thumbnail} alt=""/></Thumb>
                                        <InfoPost>
                                            <h4>{posts.data.title}</h4>
                                            <h5>
                                                <span>Enviado {moment(posts.data.created*1000).fromNow()}</span> 
                                                <> por </>
                                                <span>{posts.data.author}</span>
                                            </h5>
                                            <p> {posts.data.domain}</p>
                                            {posts.err}
                                        </InfoPost>
                                    </InfoList>


                                    <Break/>
                                </li>
                        ))}
                        
                        {!loading && after &&
                                                <MessageError>
                                                    <button onClick={getPostList} type="button"> MOSTRAR MAIS</button>
                                                </MessageError>
                        }

                        {loading && 
                                    <MessageError>
                                        <h3>Carregando...</h3>
                                    </MessageError>
                        }

                        {error && <h1>oie erro</h1>}

                        {!after && 
                                    <MessageError>
                                        <h3>Ops, parece que acabou os posts :(</h3>
                                    </MessageError>
                        }

                    </Post>
                </PostsList>
            </Container>   
    );
};