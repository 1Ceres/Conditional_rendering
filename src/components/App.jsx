import React from "react";
import Form from "./Form";

var userIsRegistered = false;
// console.log(userIsRegistered);

function App() {
  return (
    <div className="container">
      {userIsRegistered ? <Form user="true" /> : <Form user="false" />}
    </div>
  );
}

export default App;
