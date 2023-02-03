import React, { Component, CSSProperties, ReactElement } from "react";
import { CSSTransition } from "react-transition-group";
import "./index.less";

interface _Props {
  visible: boolean;
  children: ReactElement;
  timeout?: number;
  style?: CSSProperties;
  onEntered?: () => void;
  onExited?: () => void;
}

export default class Alert extends Component<_Props> {
  render() {
    const {
      visible,
      children,
      style,
      timeout,
      onEntered,
      onExited
    } = this.props;
    return (
      <div className="component-transition-alert">
        <CSSTransition
          in={visible}
          timeout={timeout ?? 300}
          classNames="alert"
          mountOnEnter
          unmountOnExit
          onEntered={onEntered}
          onExited={onExited}
        >
          {React.cloneElement(children, {
            style: {
              ...style
            }
          })}
        </CSSTransition>
      </div>
    );
  }
}
