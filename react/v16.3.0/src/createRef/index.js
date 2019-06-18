import React, { Component } from 'react';

class MyComponent extends Component{
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    this.inputRef.focus();
  }
  render() {
    return (
      <input ref={ref => this.inputRef = ref}/>
    )
  }
}

export default MyComponent;
