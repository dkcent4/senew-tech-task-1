import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND}/api/person/get-people`
      );
      const resData = await res.json();
      setData(resData);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>People</h1>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {data.map((person) => (
              <tr>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
