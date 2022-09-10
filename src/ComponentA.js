import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { Link } from "react-router-dom";

const ComponentA = () => {
  const [count,setCount ] = useState(0);
  
  useEffect(() => {
    console.log('useEffect　が呼び出されました。');
    axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
      console.log(res,'res check')
  })
  },[count]);
const increment = () => {
  setCount(count + 1);
};
  return (
    <div> 
     ComponentA
      <Link to="/componentb" >ComponentBへ移動</Link>
      <button onClick={increment}>+</button>
      <div>count : {count}</div>
    </div>
  
  );
};

export default ComponentA