import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { AsyncComponent } from './utils/AsyncComponent';
import Cpt from './components/index';
// console.log(AsyncComponent);
// const Input = Cpt.Input;

const Input = AsyncComponent(Cpt.Input);
const Button = AsyncComponent(Cpt.Button);

function App() {
    window.onhashchange = function(event) {
        const { target: {
            location
        } } = event;
        console.log(location)
        renderDom(location)
    }
    const [dom, setDom] = useState(()=> {});
    function renderDom({
        hash = "hello",
    }) {
        console.log('url', hash);
        switch (hash) {
            case "hello":
                setDom(function() {
                    console.log('reset hello');
                    return <p>hellow wolrd</p>
                })
                break;
            case "#bt":
                setDom(function() {
                    console.log('reset button');
                    return <Button name="lfkg"/>
                })
                break;
            case "#inpt":
                setDom(function() {
                    console.log('reset Input');
                    return <Input/>
                })
                break;
            default:
                setDom(function() {
                    console.log('reset');
                    return <p>404 not Found</p>
                })
        }
    }
    useEffect(() => {
        // renderDom('hello')
        // console.log('在 dep 改变时触发,若无 dep 则,每次更新组件都会触发')
        return () => {
            // renderDom("hello");
            // console.log('在组件 unmount 时触发')
        };
    });
    async function tt() {
        return 222;
    }
    const v  = tt();
    v.then((data) => {
        console.log(data, 11);
    })
    console.log();
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
             {dom}
             <Button name="main"/>
          </header>

        </div>
    );
}

export default App;
