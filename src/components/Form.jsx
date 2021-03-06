import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {/* {console.log(props.user + "Inside")} */}
      {props.user === "true" ? null : (
        <input type="password" placeholder="Confirm Password" />
      )}
      <button type="submit">
        {props.user === "true" ? "Login" : "Register"}
      </button>
    </form>
  );
}

export default Form;
