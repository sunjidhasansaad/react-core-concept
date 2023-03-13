import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const products = [
    { name: "product 1", image: "./src/downloadimage.jpg" },
    { name: "product 2", image: "./src/downloadimage.jpg" },
    { name: "product 3", image: "./src/downloadimage.jpg" },
    { name: "product 4", image: "./src/downloadimage.jpg" },
    { name: "product 5", image: "./src/downloadimage.jpg" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        {/* <CardProductName product={products}></CardProductName> */}
        {/* {products.map((product) => (
          <CardProductName product={product}></CardProductName>
        ))} */}
        <Counter></Counter>
        <Users></Users>
        {/* product={product} */}
        {}
        {products.map((product) => (
          <Card product={product}></Card>
        ))}
      </header>
    </div>
  );
}
//<h1>Product Name : {props.product.name}</h1>;
function Card(props) {
  const cartStyle = {
    border: "1px solid red",
    backgroundColor: "lightgray",
    height: "300px",
    float: "left",
    margin: "10px",
  };
  return (
    <div style={cartStyle}>
      <h1>name: {props.product.name}</h1>
    </div>
  );
}

function CardImage(props) {
  const CardImageStyle = {
    margin: "10px",
  };
  return (
    <img style={CardImageStyle} src={props.product.image} alt="resr"></img>
  );
}
function CardProductName(props) {
  const CardProductNameStyle = {};

  return (
    <div>
      <p style={CardProductNameStyle}>name : {props.product.name}</p>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  // const handleIncrease = ;

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h3>Dynamic users: </h3>
      <ul>
        {users.map((users) => (
          <li>{users.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
