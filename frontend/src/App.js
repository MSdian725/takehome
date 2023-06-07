import React, {useEffect, useState} from "react";
import './App.css';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    callApi();
  }, [])

  const callApi = async () => {
    const response = await fetch("http://127.0.0.1:5000/data");
  const jsonData = await response.json();
  console.log(jsonData);
  setData(jsonData.student);
  }

  const headings = ["Sl no.", "name", "age", "hobbies"];
  return (
    <div className="App">
      <table border={4}>
        <thead>
          <tr>
            {headings.map(h => <th key={h}>{h.toUpperCase()}</th>)}
          </tr>
        </thead>
        <tbody>
        {data.map((row, i) => <tr key={i+1}>
          <td>{i+1}</td>
          <td>{row.age}</td>
          <td>{row.name}</td>
          <td>
            <table border={2}>
              <tr>
                {row.hobbies.map(hobbie => <td key={hobbie}>{hobbie}</td>)}
              </tr>
            </table>
          </td>
          </tr>)}
          
        </tbody>
      </table>
    </div>
  );
}

export default App;
