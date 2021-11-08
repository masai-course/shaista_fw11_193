const TableItem = ({ id, name, age, address, dept, salary, isMarried, deleteTodo }) => {
	return (
		<tr>
			<td  style={{border: "1px solid black"}}>{name}</td>
			<td  style={{border: "1px solid black"}}>{age}</td>
			<td  style={{border: "1px solid black"}}>{address}</td>
			<td  style={{border: "1px solid black"}}>{dept}</td>
			<td  style={{border: "1px solid black"}}>{salary}</td>
			<td  style={{border: "1px solid black"}}>{isMarried ? 'Yes' : 'No'}</td>
			<td  style={{border: "1px solid black"}}>
				<button onClick={() => deleteTodo(id)}>❌</button>
			</td>
		</tr>
	);
};

export default TableItem;