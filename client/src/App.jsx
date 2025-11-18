import './App.css'
import { useState, useEffect } from 'react' 

function App() {
  const [data, setData] = useState("");
  
  useEffect(() => {
    fetch("http://localhost:4000/api/message")
    // The callback gives you data in string fromat hence converting it into json format.
    .then((res)=>res.json())
    .then((recievedData) => setData(recievedData.message))
    .catch((err) => {console.log(`Error Fetching data ${err}`)})
    console.log(data)
  },[])
  // useEffect contains callback and dependency array

  return (
    <>
    <h1>Welcome to FullStack Development course</h1>
    <h3>{data}</h3>
    </>
  )
}

export default App