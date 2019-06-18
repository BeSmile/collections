import React from 'react';
import { ThemeContext, defaltTheme } from './theme';
/**
  通过provider配置一个全局的组件，子组件无论在哪里都可以获取到props，
  原理：通过父组件的render方法，每次修改重新渲染子组件
  疑问： 如何在子组件当中修改父组件当中的参数变量，适合修改主题这种吗
*/
const Button = ({theme}) => {
  console.log('button', theme);
  return <button style={{backgroundColor: theme.backgroundColor, color: theme.color}}>button</button>
}

export const ButtonGrops = ({theme}) => {
  console.log('group', theme);
  return <ThemeContext.Consumer>
    {
      content => {
        return <div> <Button theme = {content}/> </div>
      }
    }
  </ThemeContext.Consumer>
}

export const CreateReactContext = () => (
  <ThemeContext.Consumer>
    {
      content => {
        return <ButtonGrops theme = {content} />
      }
    }
  </ThemeContext.Consumer>
)

export class ToggleButton extends React.Component{
  constructor(props) {
    super(props);
    this.state= {
      theme: defaltTheme,
    }
  }
  triggerTheme() {
    console.log('ddd');
    this.setState({
      theme: {
        backgroundColor: '#000',
        color: '#fff',
      }
    })
  }
  render() {
    console.log('theme render');
    const { theme } = this.state;
    return <ThemeContext.Provider value={theme}>
      <CreateReactContext/>
      <button onClick={this.triggerTheme.bind(this)}>toggle theme</button>
    </ThemeContext.Provider>
  }
}
