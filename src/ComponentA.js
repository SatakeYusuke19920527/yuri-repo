
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
const ComponentA = () => {
  return (
    <div>ComponentA
      <Link to="/componentb" >ComponentBへ移動</Link>
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
      </Table>
      <Link to="/componenta" >Home</Link>
      <Link to="/componentb" >ComponentB</Link>
      <Link to="/componentc" >ComponentC</Link>
      

function BasicExample() {
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      }
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Date</th>
          <th>#</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>aaa</td>
          <td>19921123</td>
          <td>-</td>
        </tr>
        <tr>
          <td>2</td>
          <td>bbb</td>
          <td>19921124</td>
          <td>-</td>
        </tr>
        <tr>
          <td>3</td>
          <td>ccc</td>
            <td>19921125</td>
            <td>-</td>
          </tr>
          <tr>
          <td>4</td>
          <td>ddd</td>
          <td>19921126</td>
          <td>-</td>
          </tr>
          <tr>
          <td>5</td>
          <td>eee</td>
          <td>19921127</td>
          <td>-</td>
        </tr>
        </tbody>
        </Table>
    </div>
  
  );
};

export default ComponentA