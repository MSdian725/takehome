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

  co