import React from 'react';

export default class Input extends React.Component{
    constructor(props){
        super(props);
        console.log('render Input');
    }
    componentDidMount() {
        console.log('render Input componentDidMount');
    }
    render() {
        return <input/>
    }
}
