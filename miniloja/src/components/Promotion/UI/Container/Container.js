import React from "react";
import style from "styled-components";


const UIContainer = ({ children }) => {
    return(
        <UIcontainer>
         {children}
        </UIcontainer>
    )
}





export default UIContainer;

const UIcontainer = style.div`
    max-width: 800px;
    margin: 30px auto;
`;