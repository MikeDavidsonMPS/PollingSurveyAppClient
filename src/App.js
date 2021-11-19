import React, {useEffect,useState} from "react";
// import "./App.css";
import CreatePoll from "./01-components/polls/admin/CreatePoll";



function App () {
  return (
    <main className = "container text-center">
      <div>
        <CreatePoll/>
      </div>
    
    </main>
  );
}

export default App;
