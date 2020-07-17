import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 92px;
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
`;

export const Break = styled.div`
    margin-top: 33px;
    width: 80%;
    height: 1px;
    background-color: #D2D2D2;
`;