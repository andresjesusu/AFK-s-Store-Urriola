import React from 'react';

class Header extends React.Component {
    render(){
        const styleHeader = {
            backgroundColor: "white",
            fontFamily: "Arial",
            color: "black",
            fontSize: "50"
        }
        return(
            <>
                <h1 style={styleHeader}>AFK's Store</h1>
                
            </>
        )
    }
}
export default Header;