import React, {Component} from 'react';
import {withTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import model from '../model';
import * as S from './style';

// type Props = {
//   id: number,
//   type: string | void,
//   title: string | void,
//   message: string | void,
//   isHidden: boolean,
//   hideNotification: Function,
//   lockAutoDismissNotification: Function,
//   t: Function,
// };

const mapDispatchToProps = {
  hideNotification: model.actions.hideNotification,
  lockAutoDismissNotification: model.actions.lockAutoDismissNotification,
};

@withTranslation()
@connect(
    null,
    mapDispatchToProps
)
class NotifierItem extends Component {
  constructor(props) {
    super(props);
    this.handleHideNotification = this.handleHideNotification.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
  }

  handleHideNotification() {
    const {id, hideNotification} = this.props;
    return hideNotification(id);
  }

  handleMouseEnter() {
    const {id, lockAutoDismissNotification} = this.props;
    lockAutoDismissNotification(id);
  }

  render() {
    const {type, title, message, isHidden, t} = this.props;
    const isRenderTitle = type !== undefined || title !== undefined;
    return (
        <S.Root type={type} isHidden={isHidden} onMouseEnter={this.handleMouseEnter}>
          <S.Header>
            {isRenderTitle && <S.Title>{title || t(`notifier:type.${type}`)}</S.Title>}
            {/*<S.Button type="button" onClick={this.handleHideNotification}>*/}
            {/*  {t('common:button.close')}*/}
            {/*</S.Button>*/}
          </S.Header>
          <S.Message>{message}</S.Message>
        </S.Root>
    );
  }
}

export default NotifierItem;
