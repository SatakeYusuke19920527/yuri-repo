import React,{useEffect,useState,} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const ComponentB = () => {

  const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            setPosts(res.data)
            console.log(res)
        })
    }, [])

  return (
    <div>
      ComponentB
      <Link to="/componentc" >ComponentCへ移動</Link>
       <Link to="/componenta" >ComponentAへ移動</Link>
       const increment = () = {
  console.log('useEffect　が呼び出されました。')
       }
       <button onClick={increment}>jff</button>
    <Table striped bordered hover>
    <thead>
        <tr>
          <th>userid</th>
          <th>id</th>
          <th>title</th>
          <th>body</th>
        </tr>
        </thead> 
      
        <tbody>
            {
                posts.map((post,index) => {
                  return(
                    <tr key={index}>
                      <td > {post.userid}1 </td>
                      <td > {post.id} </td>
                      <td > {post.title} </td>
                      <td > {post.body} </td>
                    
                    </tr>
                  )
                
              })
            }
        </tbody>
    </Table>
  </div>
  );
};

export default ComponentB