import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Crud = () => {

	let [users, setUsers] = useState([]);
	let [edited, setEdited] = useState(0);

	let name = useRef();
	let email = useRef();
	let contact = useRef();
	let gender = useRef();

	useEffect(()=>{
		fetch(" http://localhost:4000/user")
		.then((res) => { return res.json() })
		.then((data) => {  setUsers(data) })
	},[edited])

	let handleSubmit = (e) => {
		e.preventDefault()

		let user = {
			name: name.current.value,
			email: email.current.value,
			contact: contact.current.value,
			gender: gender.current.value
		}

		fetch(" http://localhost:4000/user", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(user)
		}).then(()=>{
			setEdited(edited+1)
		})

	}

	let remove =(id)=>{
		fetch(`http://localhost:4000/user/${id}`,{
			method:"DELETE"
		}).then(()=>{
			alert("data removed")
			setEdited(edited+1);
		})
	}

	return (
		<div>
			<form onSubmit={handleSubmit} >
				<label htmlFor="">Name: <input type="text" ref={name} /></label><br />
				<label htmlFor="">Email : <input type="email" name="" id="" ref={email} /></label><br />
				<label htmlFor="">Contact No: <input type="number" name="" id="" ref={contact} /></label><br />
				<label htmlFor="">Gender: <input type="text" ref={gender} /></label><br />
				<input type="submit" value="Submit" />
				<hr />
			</form>
			<table>
				<thead>
					<tr>

					    <td>S.NO</td>
						<td>NAME</td>
						<td>EMAIL</td>
						<td>CONTACT</td>
						<td>GENDER</td>
						<td>ACTION</td>
					</tr>
				</thead>
				<tbody>
					{
						users.map((user) => {
							return (
								<tr>
									<td>{user.id}</td>
									<td>{user.name}</td>
									<td>{user.email}</td>
									<td>{user.contact}</td>
									<td>{user.gender}</td>
									<td>
										<Link to={`/update/${user.id}`}>
										<button>EDIT</button>
										</Link>
										<button onClick={()=>{remove(user.id)}}>Delete</button>
									</td>
								</tr>
							)
						})
					}
				</tbody>
			</table>
			

		</div>
	);
}

export default Crud;