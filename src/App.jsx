import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
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
                <h1>{el?.title}</h1>
                <img src={el?.url} alt="" />
              </div>
            </>
          );
        })}
    </>
  );
}

export default App;
