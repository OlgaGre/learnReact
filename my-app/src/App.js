// import React from 'react';

import React, { useState } from "react";

function App() {
  let [name, changeName] = useState("olga");
  let [sname, changeSname] = useState("gre");
  let [age, changeAge] = useState(18);
  let [ban, changeBan] = useState(false);
  return (
    <div>
      <span>{name}</span>
      <button onClick={() => changeName("OLGA")}>change name</button>
      <br></br>
      <span>
        {sname}
        <button onClick={() => changeSname("GRE")}>change sname</button>
      </span>
			<br></br>
      <span>{age}</span>
      <button onClick={()=> changeAge(age ++)}>+</button>
      <button onClick={()=> changeAge(age --)}>-</button>
      <div>{ban ? "ban" : "no ban"}</div>
      {!ban && <button onClick={() => changeBan(true)}>ban</button>}
      {ban && <button onClick={() => changeBan(false)}>delete ban</button>}
    </div>
  );
}

export default App;
