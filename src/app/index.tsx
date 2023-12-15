import React, { useEffect, useState } from "react";
import axios from "axios";

export function App(props) {
  const [count, setCount] = useState(22);
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/2")
      .then((response) => setData(response.data));
  }, []);

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
