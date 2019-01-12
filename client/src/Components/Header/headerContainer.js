// only need to import react.
import React from "react";

// this is the same container as the regular Grid container just with another
// hard coded class. this will only be used in the Header Component
const HeaderContainer = ({children}) => (
    <div className ="HeaderContainer container">
        {children}
    </div>
);

// export the HeaderContainer to be used in the header component
export default HeaderContainer;