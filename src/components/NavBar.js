import React from 'react';

class Header extends React.Component {
    render(){
        const styleHeader = {
            backgroundColor: "white",
            fontFamily: "Arial",
            color: "black",
            fontSize: "30"
        }
        return(
            <Fragment>
                <h1>AFK's Store</h1>
                <ul> <li>Juegos PS4</li> <li>JUEGOS PS5</li>
                </ul>
            </Fragment>
        )
    }
}
export default Header;