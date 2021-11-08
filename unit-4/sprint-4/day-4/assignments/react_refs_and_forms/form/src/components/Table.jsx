import TableItem from './TableItem';

const Table = ({ list, deleteTodo }) => {
	return (
		<table style={{border: "1px solid black",margin:"20px auto"}}>
			<thead>
				<tr style={{border: "1px solid black"}}>
					<th style={{border: "1px solid black"}}>Name</th>
					<th style={{border: "1px solid black"}}>Age</th>
					<th style={{border: "1px solid black"}}>Address</th>
					<th style={{border: "1px solid black"}}>Department</th>
					<th style={{border: "1px solid black"}}>Salary</th>
					<th style={{border: "1px solid black"}}>Married</th>
                    <th style={{border: "1px solid black"}}>Delete</th>
				</tr>
			</thead>
			<tbody>{list.map((user) => <TableItem data={user} key={user.id} {...user} deleteTodo={deleteTodo} />)}</tbody>
		</table>
	);
};

export default Table;