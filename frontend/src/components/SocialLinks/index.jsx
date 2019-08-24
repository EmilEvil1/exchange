import React from 'react';
import * as CS from './style'; 

class SocialLinks extends React.PureComponent {
    render() {
        return (
            <CS.SocialWrapp>
                <CS.SocialLink iconName="tg-icon" href="#"></CS.SocialLink>
                <CS.SocialLink iconName="mess-icon" href="#"></CS.SocialLink>
                <CS.SocialLink iconName="phone-icon" href="#"></CS.SocialLink>
            </CS.SocialWrapp>
        );
    }
}

export default SocialLinks;