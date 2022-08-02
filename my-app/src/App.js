import React from 'react';

const users = [
	{id: 1, name: 'user1', surn: 'surn1', 
		age: 30}, 
	{id: 2, name: 'user2', surn: 'surn2', 
		age: 31}, 
	{id: 3, name: 'user3', surn: 'surn3', 
		age: 32}, 
];

function App() {
	const res = users.map(function(item) {
		return <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.surn}</td>
    </tr>
	});
	return <table>
    <tbody>
      {res}
    </tbody>
  </table>
}
export default App;