import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);
  return (
    <>
      {data.length > 0 &&
        data.map((el) => {
          return (
            <>
              <div className="">
                <h1>{el?.id}</h1>
                <h1>{el?.name}</h1>
              </div>
            </>
          );
        })}
    </>
  );
}

export default App;
