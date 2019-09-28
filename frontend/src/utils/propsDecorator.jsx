import React from 'react';
import truetype from 'src/utils/truetype';

const propsDecorator = payload => Component => {
  const Content = props => {
    if (truetype.isFunction(payload)) {
      return <Component {...props} {...payload(props)} />;
    }
    if (truetype.isObject(payload)) {
      return <Component {...props} {...payload} />;
    }
    throw payload;
  };
  Object.entries(Component).forEach(([key, value]) => {
    if (!/^(propTypes|defaultProps)$/.test(key)) {
      Content[key] = value;
    }
  });
  return Content;
};

export default propsDecorator;
