import styled from 'styled-components';

export const Section = styled.div`
    width: 100%;
    height: 90px;
    background-color: #1B1B1B;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 3px 4px #7C7C7C;
`;

export const SideBar = styled.div`
    margin: 30px auto;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
`;

export const Button = styled.a`
    margin: 0 8px 10px 8px;
    width: 160px;
    height: 45px;
    background-color: #E8E8E8;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    img {
        margin-right: 10px;
    }

    a{
        text-decoration: none;
        color: #FF5722;
        font-size: 17px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
 
    }

    a:hover {
        width: 160px;
        height: 45px;
        background-color: #D8D8D8;
        border-radius: 10px;

    }
`;

export const Break = styled.div`
    margin-top: 30px;
    display: flex;
    align-content: center;
    justify-content: center;
    
`;

export const LineBreak = styled.div`
    width: 80%;
    height: 1px;
    background-color: #D2D2D2;
`;