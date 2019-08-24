import React from 'react';
import * as CS from './style'; 

class Logo extends React.PureComponent {
    render() {
        return (
            <CS.Root>
                <CS.Image src="/static/images/main-logo.png" alt=""/>
            </CS.Root>
        );
    }
    
}

export default Logo;