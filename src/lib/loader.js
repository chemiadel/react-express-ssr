import axios from "axios";

export default async function loader(data) {
  if (typeof global !== "undefined") {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/3"
    );

    global.INITIAL_DATA = JSON.stringify(data);

    return <App data={JSON.parse(global.INITIAL_DATA)} />;
  }

  return <App data={JSON.parse(window.INITIAL_DATA)} />;
}
