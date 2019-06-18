import React, { memo, Component } from 'react';
/*
  * memo 使functionComponent支持componentShouldUpdate
  * 支持函数。返回true代表不更新，false代表要更新
*/
const Button = (props) => {
  console.log('render');
  const {id} = props;
  return (
    <button>button- {id}</button>
  )
}


const MemoButton = memo(Button, function(prevProps, nextProps) {
  console.log('compare', prevProps.id, nextProps.id);
  return prevProps.id === nextProps.id;
})

export default class Memo extends Component{
  constructor(props) {
    super(props);
    this.state = {
      id: 2,
    }
  }
  componentDidMount() {
    const _this = this;
    setTimeout(function() {
      _this.setState({
        id: 3,
      })
    }, 5000)
    setTimeout(function() {
      _this.setState({
        id: 4,
      })
    }, 8000)
    setTimeout(function() {
      _this.setState({
        id: 4,
      })
    }, 10000)
  }
  render() {
    const { id } = this.state;
    return (
      <MemoButton id={id}/>
    )
  }
}
