import React, { useEffect, useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import axios from 'axios'

export default async function loader() {
  
  if(typeof global !== 'undefined'){
     
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/3')

    global.INITIAL_DATA = JSON.stringify(data);
    
    return <App data={JSON.parse(global.INITIAL_DATA)} />
  } 
  
  return <App data={window.INITIAL_DATA} />

}

export function App(props) {
  const [count, setCount] = useState(22);
  const [data, setData] = useState({});

  useEffect(()=> {
    axios.get('https://jsonplaceholder.typicode.com/todos/2')
    .then(response => setData(response.data))
  },[])

  return (
    <div>
      <h1>Server Rendering Example</h1>
      <p>
        If you check out the HTML source of this page, you'll notice that it
        already contains the HTML markup of the app that was sent from the
        server!
      </p>
      <hr />
      <div>{`server data:  ${JSON.stringify(props?.data)}`}</div>
      <hr />
      <hr />
      <div>{`client data:  ${JSON.stringify(data)}`}</div>
      <hr />
      {count}
      <br />
      <button onClick={() => setCount((prev) => prev + 1)}>Click me!</button>
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>
      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
