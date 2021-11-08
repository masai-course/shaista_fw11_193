import { useState, useEffect } from 'react';
import Table from './Table';
import "./table.css";
const Input = () => {

    const [userReg, setUserReg] = useState({
        name: "",
        age: "",
        address: "",
        dept: '',
        salary: "",
        isMarried: false
    })
    const [records, setRecords] = useState([])
    const [userList, setUserList] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const type = e.target.type;
        const checked = e.target.checked;

        setUserReg({
            ...userReg,
            [name]: type === "checkbox" ? checked : value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = ({ ...userReg, id: new Date().getTime().toString() })
        console.log(newRecord);

        fetch('http://localhost:3001/register', {
            method: 'POST',
            body: JSON.stringify(newRecord),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setRecords([...records, newRecord])
        setUserReg({
            name: "",
            age: "",
            address: "",
            dept: '',
            salary: "",
            isMarried: false
        });
    }

    function makeRequest(method, payload) {
        if (method === "GET" && payload === null) {
            fetch(`http://localhost:3001/register`).then((res) => res.json()).then((data) => {
                setUserList(data);
            });
        }
    }

    useEffect(() => {
        makeRequest("GET", null);
    }, []);


    const deleteTodo = (id) => {
        const list = userList.filter((item) => item.id !== id);
        setUserList(list);
    };

    const handleFilter = (e) => {
        const dept = e.target.value;
        const filteredList = userList.filter((user) => user.dept === dept);
        setUserList(filteredList);
    };

    const handleSort = () => {
        const sortedList = [...userList].sort((a, b) => +a.salary - +b.salary);
        setUserList(sortedList);
    };

    return (
        <>
            <div>
                <form action="" onSubmit={handleSubmit} >
                    <table id="table_content">
                    <tr>
                        <td><label htmlFor="username">Name</label></td>
                        <td><input type="text" value={userReg.name} onChange={handleInput} name="name" id="name" /></td>
                    </tr>

                    <tr>
                        <td><label htmlFor="age">Age</label></td>
                        <td><input type="Number" value={userReg.age} onChange={handleInput} name="age" id="age" /></td>
                    </tr>

                    <tr>
                        <td><label htmlFor="address">Address</label></td>
                        <td><input type="text" value={userReg.address} onChange={handleInput} name="address" id="address" /></td>
                    </tr>
                    <tr>
                        <td><label> Departments</label></td>
                        <td><select name="dept" value={userReg.dept} onChange={handleInput} >
                            <option value="accountant">Accountant</option>
                            <option value="enginer">Engineer</option>
                            <option value="operator">Operator</option>
                            <option value="SoftwareEngineer">SoftwareEngineer</option>
                            <option value="FSWD">Full Stack Web Developer</option>
                            <option value="FSAD">Full Stack Android Developer</option>
                        </select></td>
                    </tr>

                    <tr>
                        <td><label htmlFor="salary">Salary</label></td>
                        <td><input type="Number" value={userReg.salary} name="salary" id="salary" onChange={handleInput} /></td>
                    </tr>

                    <tr>
                       <td> <label>marital state: Married</label>
                        <input type="checkbox" value={userReg.isMarried} name="isMarried" onChange={handleInput} /></td>
                    </tr>

                    <tr>
                        <td><button id="registerbtn"type="submit" >Register</button></td>
                    </tr>
                    </table>
                </form>
            </div>
            <div>
                <select name='filter' onChange={handleFilter}>
                    <option value="accountant">Accountant</option>
                    <option value="enginer">Engineer</option>
                    <option value="operator">Operator</option>
                    <option value="SoftwareEngineer">SoftwareEngineer</option>
                    <option value="FSWD">Full Stack Web Developer</option>
                    <option value="FSAD">Full Stack Android Developer</option>
                </select>
                <button onClick={handleSort}>Sort with Salary</button>
            </div>
            <Table list={userList} deleteTodo={deleteTodo} />
        </>
    )
}

export default Input