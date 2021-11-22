import React, {useEffect,useState} from "react";
import Register from "./01-components/auth/Register";
// import "./App.css";
import CreatePoll from "./01-components/polls/admin/CreatePoll";



function App () {
  return (
    <main className = "container text-center">
      <div>
        <Register/>
      </div>
    
    </main>
  );
}

export default App;
