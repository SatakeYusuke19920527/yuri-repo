import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);
  let box = []
  const increment = () => {
     setCount(count + 1);  
     console.log(count);
  };
  const increment2 = () => {
    setCount(count - 1);
  };
  const increment3 = () => {
    setCount(count * 0);
  };
  const add = () => {
    
    box.push('yuri')
    console.log('add にきてるよ', box)
  }
const buttonalert = () => {
              alert('Clickked!');
             
}
  const name = '0'
  console.log(box, 'boxの中身')
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world </h1>
        <h2>Hello world </h2>
        <h3>Hello world </h3>
        <h4>Hello world </h4>
        <button
          onClick={() => window.alert("Hello World")}
>button</button>
        <button>butonn</button>
        <input type="text" />
        <a href="#">a タグ </a>
        <button onClick={increment}>いいね！</button><button onClick={increment2}>よくないね！</button><button onClick={increment3}>リセット</button>{count}
        <button onClick={add}>add</button>
          
          <code className="aiueo">
            
            <h1>Hello world </h1></code>
           
        
       
          <button onClick={buttonalert}>Click me</button>
         
        {/* <a href="#" onClick="window.alert(”localhost: 3000”)"></a> */}
    
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
      </header>
    </div>
  );
}

