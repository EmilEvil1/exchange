import styled from 'styled-components';

export const SocialWrapp = styled.div`
    display: flex;
`;

export const SocialLink = styled.a`
::before {
    width: 30px;
    height: 100%;
    content: '';
    display: flex;
    align-items: center;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: url("/static/svg/${props => props.iconName}.svg");
  }
`;
