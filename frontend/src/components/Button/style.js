import React, {memo} from 'react';
import styled, {css} from 'styled-components';
import Color from 'color';
import {colors, mixins} from 'frontend/src/styles';

const isActiveLink = props => !props.design.isDisabled && props.design.isActiveLink;

const getCursor = props => {
  if (props.design.isDisabled || isActiveLink(props)) {
    return 'default';
  }
  return 'pointer';
};

const getBlock = props => {
  if (props.design.block) {
    return `
      display: flex;
      min-width: 100%;
    `;
  }
  return 'display: inline-flex;';
};

const createDefaultColor = ({textColor}) => props => {
  if (props.design.isDisabled) {
    return `
      color: ${colors.common.black};
      background-color: ${colors.common.gray};
    `;
  }
  return `
    color: ${textColor};
    background-color: ${colors.common.transparent};
  
    ${!isActiveLink(props) && `
      :hover {
        color: ${Color(textColor).darken(0.1).string()};
        background-color: ${Color(colors.common.white).darken(0.1).string()};
      }
      
      :focus {
        color: ${Color(textColor).darken(0.1).string()};
        background-color: ${Color(colors.common.white).darken(0.1).string()};
      }
  
      :active {
        color: ${Color(textColor).darken(0.2).string()};
        background-color: ${Color(colors.common.white).darken(0.2).string()};
      }
    `}
  `;
};

const createTextColor = ({textColor}) => props => {
  const color = isActiveLink(props) ? textColor : Color(textColor).alpha(0.8).string();
  const events = !props.design.isDisabled && !isActiveLink(props) ? `
    :hover {
      color: ${textColor};
    }
    
    :focus {
      color: ${textColor};
    }
    
    :active {
      color: ${textColor};
    }
  ` : null;
  return `
    color: ${color};
    background-color: ${colors.common.transparent};
    ${events}
  `;
};

const createContainedColor = ({textColor, backgroundColor}) => props => {
  if (props.design.isDisabled) {
    return `
      color: ${colors.common.black};
      background-color: ${colors.common.gray};
    `;
  }
  return `
    color: ${textColor};
    background-color: ${backgroundColor};
  
    ${!isActiveLink(props) && `
      :hover {
        background-color: ${Color(backgroundColor).darken(0.1).string()};
      }
      
      :focus {
        background-color: ${Color(backgroundColor).darken(0.1).string()};
      }
  
      :active {
        background-color: ${Color(backgroundColor).darken(0.2).string()};
      }
    `}
  `;
};

const getDefaultColor = props => {
  switch (props.design.color) {
    case 'white': {
      return createDefaultColor({
        textColor: colors.common.white,
      });
    }
    case 'blue': {
      return createDefaultColor({
        textColor: colors.common.blue,
      });
    }
    case 'red': {
      return createDefaultColor({
        textColor: colors.common.red,
      });
    }
    case 'green': {
      return createDefaultColor({
        textColor: colors.common.green,
      });
    }
    default: {
      return createDefaultColor({
        textColor: colors.common.black,
      });
    }
  }
};

const getTextColor = props => {
  switch (props.design.color) {
    case 'white': {
      return createTextColor({
        textColor: colors.common.white,
      });
    }
    case 'blue': {
      return createTextColor({
        textColor: colors.common.blue,
      });
    }
    case 'red': {
      return createTextColor({
        textColor: colors.common.red,
      });
    }
    case 'green': {
      return createTextColor({
        textColor: colors.common.green,
      });
    }
    default: {
      return createTextColor({
        textColor: colors.common.black,
      });
    }
  }
};

const getConainedColor = props => {
  switch(props.design.color) {
    case 'white': {
      return createContainedColor({
        textColor: colors.common.black,
        backgroundColor: colors.common.white,
      });
    }
    case 'blue': {
      return createContainedColor({
        textColor: colors.common.white,
        backgroundColor: colors.common.blue
      });
    }
    case 'red': {
      return createContainedColor({
        textColor: colors.common.white,
        backgroundColor: colors.common.red
      });
    }
    case 'green': {
      return createContainedColor({
        textColor: colors.common.white,
        backgroundColor: colors.common.green
      });
    }
    default: {
      return createContainedColor({
        textColor: colors.common.white,
        backgroundColor: colors.common.black,
      });
    }
  }
}

const getVariant = props => {
  switch (props.design.variant) {
    case 'text': {
      return css`
        padding: 0;
        border: none;
        transition: color 200ms linear;
        ${getTextColor(props)}
      `;
    }
    case 'contained': {
      return css`
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        text-transform: uppercase;
        transition: color 200ms linear, background-color 200ms linear;
        overflow: hidden;
        ${getConainedColor(props)}
      `;
    }
    default: {
      return css`
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        text-transform: uppercase;
        transition: color 200ms linear, background-color 200ms linear;
        overflow: hidden;
        ${getDefaultColor(props)}
      `;
    }
  }
}

export const Root = component => styled(component)`
  cursor: ${getCursor};
  ${mixins.font({size: '12px'})}
  ${getBlock}
  ${getVariant}
`;

export const Content = styled.span`
  
`;

export const Text = styled.span`
  ${props => props.hasBeforeIcon && 'margin-left: 8px;'}
`;
