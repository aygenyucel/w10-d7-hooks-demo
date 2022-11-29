import { useState } from "react";

const UseStateExample = () => {
  const [name, setName] = useState("Adam");

  if (10 > 5) {
    console.log("yes");
  }

  //   const [teacher, setTeacher] = useState("Stefano");
  //you can not use hooks inside any of condition or function etc!
  //if you even try to put the aboce usestate into a condition that migh even be ever unmet, your code will break :(
  return (
    <div>
      <h3>Current name is: {name}</h3>
      <button onClick={() => setName(name === "Adam" ? "Eve" : "Adam")}>
        Change Name
        {/* setName accepts a string */}
      </button>
    </div>
  );
};
export default UseStateExample;
