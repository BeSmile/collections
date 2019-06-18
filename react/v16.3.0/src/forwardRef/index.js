import React, { Component } from 'react';

/* 通过父组件 */
const Input = (props) => {
  return (
    <input ref = {props.inputRef} />
  )
}

const FancyButton = React.forwardRef((props, ref) => (
  <button className="btn" onClick={props.onClick} ref={ref}>
    {props.children}
  </button>
))

export class ForwardRef extends Component{
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }
  componentDidMount() {
    if (this.inputRef) this.inputRef.focus();
  }

  render() {
    return (
      <div>
          <Input inputRef={ref => this.inputRef = ref} />
      </div>
    )
  }
}

function logProp(Component) {
    class LogProps extends React.Component {
      constructor(props) {
        super(props);
        console.log('log-prop');
      }
      componentDidUpdate(prevProps) {
        console.log('先前的属性：', prevProps);
        console.log('当前属性：', this.props);
      }
      render() {
        const { forwardRef, ...reset } = this.props;
        return (
          <Component ref={forwardRef} {...reset}/>
        )
      }
    }

    return React.forwardRef((props, ref) => (
      <LogProps forwardRef={ref} {...props}/>
    ))
}

export class ForwardButton extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  componentDidMount() {
    console.log('ref', this.ref);
    this.ref.current.classList.add('primary'); // 给FancyButton中的button添加一个class
    this.ref.current.focus(); // focus到button元素上
  }
  render() {
    return (
      <React.StrictMode>
        <FancyButton onClick={()=>(alert("222"))} ref={this.ref}>click me</FancyButton>
      </React.StrictMode>
    )
  }
}

export const HocForward = logProp(FancyButton);
