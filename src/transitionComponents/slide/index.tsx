import React, { Component, CSSProperties, ReactElement } from "react";
import { CSSTransition } from "react-transition-group";
import "./index.less";

interface _Props {
  visible: boolean;
  direction: "up" | "down" | "left" | "right";
  children: ReactElement;
  timeout?: number;
  style?: CSSProperties;
  onEntered?: () => void;
  onExited?: () => void;
}

export default class Slide extends Component<_Props> {
  render() {
    const {
      visible,
      direction,
      children,
      style,
      timeout,
      onEntered,
      onExited
    } = this.props;
    return (
      <div className="component-transition-slide">
        <CSSTransition
          in={visible}
          timeout={timeout ?? 300}
          classNames={`slide-${direction}`}
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
