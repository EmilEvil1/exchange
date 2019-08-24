import React from 'react';
import * as CS from './style'; 

class Menu extends React.PureComponent {
    render() {
        return (
            <CS.Menu>
                <CS.MenuItem><CS.MenuLink href="#">ОБМЕН</CS.MenuLink></CS.MenuItem>
                <CS.MenuItem><CS.MenuLink href="#">ПРАВИЛА</CS.MenuLink></CS.MenuItem>
                <CS.MenuItem><CS.MenuLink href="#">F.A.Q.</CS.MenuLink></CS.MenuItem>
            </CS.Menu>
        );
    }
    
}

export default Menu;