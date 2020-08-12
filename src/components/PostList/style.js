import styled from 'styled-components';

export const PostsList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    
`;

export const MessageError = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px 0;

    button {
        margin-top: 30px;
        width: 200px;
        height: 45px;
        border-radius: 10px;
        background-color: #ff571fe3;
        color: #f9f9f9;
        font-size: 16px;
        cursor: pointer;

        &:hover{
            transition: 0.4s;
            opacity: 0.9;
            color: #fff;
        }
    }
`;

export const Break = styled.div`
    margin: 30px auto;
    width: 100%;
    height: 1px;
    background-color: #D2D2D2;
    display: flex;
`;


export const PostListContainer = styled.div`
    margin-top: 33px;
    width: 80%;
    display: flex;
    flex-direction: column;
    list-style: none;
`;

export const Thumb = styled.div`
    width: 70px;
    min-width: 70px;
    height: 70px;
    border-radius: 4px;
    background-color: #C4C4C4;

    img {
        width: 70px;
        height: 70px;
        border-radius: 4px;
        background-color: #C4C4C4;
    }
`;

export const Post = styled.div`
    display: flex;
    width: 100%;
`;

export const PostInfo = styled.div`
    padding: 0 10px;

    h4 {
        font-weight: 500;
    }

    span {
        color: #7C7C7C;
    }

    span:last-child {
        color: #FF5722;
    }

    h5 {
        margin: 6px auto;
        font-weight: 400;
    }

    p {
        font-size: 12px;
        font-weight: 500;
        color: #1B1B1B;
    }
`;