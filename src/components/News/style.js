import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
`;

export const Break = styled.div`
    margin: 30px auto;
    width: 100%;
    height: 1px;
    background-color: #D2D2D2;
    display: flex;
`;

export const PostsList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    
`;

export const Post = styled.div`
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

export const InfoList = styled.div`
    display: flex;
    width: 100%;
`;

export const InfoPost = styled.div`
    padding: 0 10px;

    h4 {
        font-weight: 500;
        width: 
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