import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

export default function App() {
   const [count, setCount ] = useState(0);

  const increment = () => {
                setCount(count + 1);
                console.log(count);
              };
const buttonalert = () => {
              alert('Clickked!');
             
          }
            const name = '0'
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
        <butonn>butonn</butonn>
        <input type="text" />
        <a href="#">a タグ </a>
        
        <button onClick={increment}>いいね！</button>{name}
        
        <p>

          
          <code className="aiueo">
            
            <h1>Hello world </h1></code>
           
        </p>
       
          <button onClick={buttonalert}>Click me</button>
         
        <a href="#" onclick="window.alert(”localhost: 3000”)"></a>
    
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

