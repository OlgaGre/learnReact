// import React from 'react';

import React, { useState } from "react";


function App() {
	const [value1, setValue1] = useState('');
	const [value2, setValue2] = useState('');
	const [result1, setResult1] = useState('');
	const [result2, setResult2] = useState('');
	
	return <div>
		<input value={value1} onChange={event => setValue1(event.target.value)} />
		<input value={value2} onChange={event => setValue2(event.target.value)} />
<button onClick={() => setResult1(Number(value1) + Number(value2))}>+</button>
<button onClick={() => setResult2(Number(value1) * Number(value2))}>*</button>
		<p>text: {result1}</p>
		<p>text: {result2}</p>
	</div>;
}

export default App;
