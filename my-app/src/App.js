import React from 'react';
import { nanoid } from 'nanoid'
const prods = [
	{id:id(), name: 'product1', cost: 100},
	{id:id(), name: 'product2', cost: 200},
	{id:id(), name: 'product3', cost: 300},
];
function id() {
	return nanoid()
}
function App() {
	const rows = prods.map(function(item) {
		return <tr key={item.id}>
			<td>{item.name} {item.id}</td>
			<td>{item.cost}</td>
		</tr>;
	});
	
	return <table>
		<tbody>
			{rows}
		</tbody>
	</table>;
}

export default App;