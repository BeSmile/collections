import React from 'react';

export default class Button extends React.Component{
    constructor(props){
        super(props);
        // super(props);
        this.state = {
            rm: "ef",
        };
        console.log('render Button', this.props);
    }
    // 只在React.createClass中使用
    // static getDefaultProps() {
    //     return {
    //         title: 'props',
    //     }
    // }
    static getInitialState() {
        return {
            rm: "igj"
        }
    }
    static getDerivedStateFromProps(props) {
        console.log(props);
        return props;
    }
    componentDidMount() {
        console.log(this.state);
        console.log('render Button componentDidMount');
    }
    handleClick() {
        console.log(2223);
        console.log(this);
    }
    render() {
        return <button onClick={this.handleClick.bind(this)}>button</button>
    }
}
