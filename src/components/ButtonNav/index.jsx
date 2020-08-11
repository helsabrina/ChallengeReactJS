import React from 'react';
import { ButtonNavLink } from './style';
 
function ButtonNav( {to, children} ) {
    return (
        <>
            <ButtonNavLink 
                to={to} 
                activeClassName="ButtonActive"
            >
                {children}
            </ButtonNavLink>
        </>
    );
}

export default ButtonNav;