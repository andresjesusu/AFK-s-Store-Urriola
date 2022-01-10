import React, { Fragment } from 'react';

class Header extends React.Component {
    render(){
        const styleHeader = {
            backgroundColor: "white",
            fontFamily: "Arial",
            color: "green",
            fontSize: "30"
        }
        return(
            <Fragment>
                <h1 style={styleHeader}>AFK's Store</h1>
                
            </Fragment>
        )
    }
}
export default Header;