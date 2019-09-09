import React from 'react';

export const AsyncComponent = (WrapperComponent) => {
    // console.log(222, WrapperComponent);
    return class TmpComponent extends React.Component{
        componentDidMount() {
            console.log(11)
        }
        render() {
            const props = this.props;
            console.log(this.props);
            return <WrapperComponent {...props}/>
        }
    }
}
