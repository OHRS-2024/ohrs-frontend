import { useState, useEffect } from "react";

function  App() {
    const [backendData, setBackendData] = useState({});

    useEffect(() =>{
        try {
          fetch('/auth/login', { 
              headers : {"Content-Type": 'application/json'},
              method : 'GET'
              }).then(res => {
                  if (!res.ok) {
                      throw new Error('No response');
                  }
                  return res.json();
              }).then(data =>{
                  console.log(data);
              })
              .catch(err => console.error(err)); 
              
      } catch (error) {
          console.log(error); 
      }
    }, []);


  return (
    
    <div className="App">

    </div>
  );
}

export default App;
