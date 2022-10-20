import React, { useState } from 'react';

function App() {
	let [name, setName] = useState('prod');
	
	return <div>
		<span>{name}</span>
		<button onClick={() => setName('xxxx')}>btn</button>
	</div>;
}

export default App;