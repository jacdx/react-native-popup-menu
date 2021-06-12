import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { debug } from './logger.js';
import { makeTouchable } from './helpers';
import { withCtx } from './MenuProvider';

export class MenuTrigger extends Component {

  _onPress() {
    debug('trigger onPress');
    this.props.onPress && this.props.onPress();
    this.props.ctx.menuActions.openMenu(this.props.menuName);
  }

  render() {
    const { disabled, onRef, text, children, style, customStyles, menuName,
      triggerOnLongPress, onAlternativeAction, touchableProps, ...other } = this.props;
    const onPress = () => !disabled && this._onPress();
    const { Touchable, defaultTouchableProps } = makeTouchable(customStyles.TriggerTouchableComponent);
    return (
        <Touchable
          ref={onRef}
          onPress={triggerOnLongPress ? onAlternativeAction : onPress}
          onLongPress={triggerOnLongPress ? onPress : onAlternativeAction}
          {...touchableProps}
          {...defaultTouchableProps}
          {...customStyles.triggerTouchable}
        >
            {children}
        </Touchable>
    );
  }

}

MenuTrigger.propTypes = {
  disabled: PropTypes.bool,
  text: PropTypes.string,
  onPress: PropTypes.func,
  onAlternativeAction: PropTypes.func,
  customStyles: PropTypes.object,
  triggerOnLongPress: PropTypes.bool,
};

MenuTrigger.defaultProps = {
  disabled: false,
  customStyles: {},
};

export default withCtx(MenuTrigger)
