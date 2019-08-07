// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createPortal} from 'react-dom';
import NotifierItem from '../NotifierItem';
import model from '../model';
// import type {NotifierItemType} from './model';
import * as S from './style';

// type Props = {
//   notifications: Array<NotifierItemType>,
// };

const mapStateToProps = state => ({
  notifications: state[model.namespace],
});

@connect(
    mapStateToProps,
    {
      sendNotification: model.actions.sendNotification,
    }
)
class Notifier extends Component {
  constructor(props) {
    super(props);
    this.root = document.createElement('div');
    this.root.className = 'notifier';
    document.body.append(this.root);
  }

  componentWillUnmount() {
    this.root.remove();
  }

  render() {
    const {notifications} = this.props;
    return createPortal(notifications.map(item => (
      <S.Item key={item.id}>
        <NotifierItem {...item} />
      </S.Item>
    )), this.root);
  }
}

export default Notifier;
