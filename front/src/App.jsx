import "./App.css";
import { useEffect, useState } from "react";
import CustomTable from "./components/customTable";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_BACKEND}/api/person/get-people`
        );
        const resData = await res.json();
        setData(resData);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1 className="align-center">People</h1>
      {data.length ? (
        <CustomTable data={data} />
      ) : (
        <h3 className="align-center">...Loading</h3>
      )}
    </div>
  );
}

export default App;
