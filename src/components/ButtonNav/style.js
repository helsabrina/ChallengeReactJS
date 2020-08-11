import { NavLink } from "react-router-dom";
import styled from 'styled-components';

export const ButtonNavLink = styled(NavLink)`
    background-color: #E8E8E8;
    width: 160px;
    height: 45px;
    border-radius: 10px;
    margin: 0 8px 10px 8px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    text-decoration:none;
    color: #FF5722;
    font-size: 18px;

    &:hover {
        width: 160px;
        height: 45px;
        background-color: #D8D8D8;
        border-radius: 10px;
    }


    img {
        margin-right: 0.8rem;
    }

    &.${props => props.activeClassName} {
        color: #FF5722; 
        background-color: #242424;
    }
`;
