import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    button {
        margin: 0 8px 10px 8px;
        width: 160px;
        height: 45px;
        background-color: #E8E8E8;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 17px;
        color: #FF5722;
        cursor: pointer;

        p {
            margin-left: 10px;
        }
    }

    button:hover {
        background-color: #D8D8D8;
    }

    button:active {
        background-color: #242424;
    }

    button:last-child {
        margin-bottom: 30px;
        width: 80%;
        height: 45px;
        background-color: #7C7C7C;
        border-radius: 10px;
        color: #ffffff;
    }
`;

export const Break = styled.div`
    margin-top: 30px;
    width: 80%;
    height: 1px;
    background-color: #D2D2D2;
    display: flex;

    :last-child {
        margin: 30px auto;
        width: 100%;
    }
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

    div {
        margin: auto 10px;
    }

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

